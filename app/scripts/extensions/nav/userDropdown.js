'use strict';

angular.module('openshiftConsole')
  .run(function(extensionRegistry, $rootScope, DataService, AuthService) {
    extensionRegistry
      .add('nav-user-dropdown', function() {
        var msg = gettext('Log out');
        msg = gettextCatalog.getString(msg)
        if ($rootScope.user.fullName && $rootScope.user.fullName !== $rootScope.user.metadata.name) {
          msg += ' (' + $rootScope.user.metadata.name + ')';
        }

        var token = AuthService.UserStore().getToken();
        var nodeHtml = "";
        if ($rootScope.user.metadata.annotations && $rootScope.user.metadata.annotations.manager) {
          nodeHtml += '<li><a href="' + window.DMOS_ADDRESS + '?t=' + token + '">集群管理</a></li>';
        }

        return [{
          type: 'dom',
          node: '<li><copy-login-to-clipboard clipboard-text="\'oc login ' + DataService.openshiftAPIBaseUrl() + ' --token=' + AuthService.UserStore().getToken() + '\'"></copy-login-to-clipboard></li>'
        },{
          type: 'dom',
          node: '<li><a href="logout">' + _.escape(msg) + '</a></li>'
        }];
      });
  });
