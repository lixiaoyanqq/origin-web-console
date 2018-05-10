'use strict';

angular.module('i18n', ['gettext', 'angularMoment']).run(['$window', 'gettextCatalog', 'amMoment', function ($window, gettextCatalog, amMoment) {
  gettextCatalog.debug = false;
  //var lang = $window.OPENSHIFT_LANG;
  var lang = "zh-CN";	

  var xmlhttp = new XMLHttpRequest();

  function state_Change() {
    if (xmlhttp.readyState === 4) {// 4 = "loaded"
      if (xmlhttp.status === 200) {
        var data = JSON.parse(xmlhttp.response);
        for (var l in data) {
          gettextCatalog.setStrings(l, data[l]);
        }
      }
      else {
        console.error("Problem retrieving language data");
      }
    }
  }

  function loadXMLDoc(url) {
    if (xmlhttp !== null) {
      xmlhttp.onreadystatechange = state_Change;
      xmlhttp.open("GET", url, false);
      xmlhttp.send(null);
    }
    else {
      console.error("Your browser does not support XMLHttpRequest.");
    }
  }

  if (lang !== 'en') {
    loadXMLDoc('languages/' + lang + '.json');
    gettextCatalog.setCurrentLanguage(lang);

    /* moment */
    amMoment.changeLocale(lang.toLowerCase());
  }

}]);
