(function () {
  'use strict';

  // Authentication service for user variables

  angular
    .module('users.services')
    .factory('Authentication', Authentication);

  Authentication.$inject = ['$window'];

  function Authentication($window) {
    var auth = {
      user: $window.user
    };

    console.log('from Authentication .....');
    console.log(auth.user);
    return auth;
  }
}());
