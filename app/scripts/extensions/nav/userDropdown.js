'use strict';

angular.module('openshiftConsole')
  .run(function(extensionRegistry, $rootScope, DataService, AuthService, gettextCatalog, gettext) {
    extensionRegistry
      .add('nav-user-dropdown', function() {
        var items = [];
        if (!_.get(window, 'OPENSHIFT_CONSTANTS.DISABLE_COPY_LOGIN_COMMAND')) {
          items.push({
            type: 'dom',
            node: '<li><copy-login-to-clipboard clipboard-text="\'oc login ' + DataService.openshiftAPIBaseUrl() + ' --token=' + AuthService.UserStore().getToken() + '\'"></copy-login-to-clipboard></li>'
          });
        }

        // items.push({
        //   type: 'dom',
        //   node: '<li><set-home-page></set-home-page></li>'
        // });

        if ($rootScope.user.metadata.annotations && $rootScope.user.metadata.annotations.manager) {
          var token = AuthService.UserStore().getToken();
          items.push({
            type: 'dom',
            node: '<li><a href="' + window.DMOS_ADDRESS + '?t=' + token + '">集群管理</a></li>'
          });
        }

        var msg = gettextCatalog.getString(gettext('Log Out'));
        if ($rootScope.user.fullName && $rootScope.user.fullName !== $rootScope.user.metadata.name) {
          msg += ' (' + $rootScope.user.metadata.name + ')';
        }
        items.push({
          type: 'dom',
          node: '<li><a href="logout">' + _.escape(msg) + '</a></li>'
        });

        return items;
      });
  });
