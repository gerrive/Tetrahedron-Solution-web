(function () {
  'use strict';

  /* @ngdoc object
   * @name client
   * @description
   *
   */
  angular
    .module('client', [
      'ngMaterial',
      'ui.router',
      'aboutUs',
      'contributions',
      'contributers',
      'projects'
    ]);
}());
