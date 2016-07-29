'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ModalcontrollerCtrl
 * @description
 * # ModalcontrollerCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ModalCtrl', ['$scope', '$translate', '$uibModalInstance', 'slides', 'name',
  	function ($scope, $translate, $uibModalInstance, slides, name) {
  	$scope.slides = slides;
  	$scope.name = name;
  	console.log(name);
  	// console.log(slides);
	$scope.ok = function () {
		$uibModalInstance.close('cancel');
	};
  }]);
