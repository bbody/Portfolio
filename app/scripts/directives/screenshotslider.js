'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:screenshotSlider
 * @description
 * # screenshotSlider
 */
angular.module('portfolioApp')
	.directive('screenshotSlider', ['$translate', '$log', '$uibModal', function($translate, $log, $uibModal){
	  return {
	    restrict: 'A',
	    scope: {
	      slides: '=',
	      modal: '=',
	      name: '@'
	    },
	    link: function($scope){
	    	$scope.hasModal = $scope.modal == true;
	      $scope.selectedSlides = $scope.slides[$scope.slides.selected];
	      var modalInstance = {};
	      $scope.openModal = function(selectedSlides, index, $event){
	      	if ($scope.hasModal){
	      		modalInstance = $uibModal.open({
		          animation: true,
		          templateUrl: 'views/partials/_modal-template.html',
		          controller: 'ModalCtrl',
		          size: 'lg',
		          resolve: {
		            slides: function () {
		              return $scope.selectedSlides;
		            },
		            name: function(){
		            	return $scope.name;
		            }
		          }
		        });

		        modalInstance.result.then(function (selectedItem) {
		          $scope.selected = selectedItem;
		        }, function () {
		          $log.info('Modal dismissed at: ' + new Date());
		        });
	      	}
	        

	        if ($event){
	          $event.preventDefault();
	        }
	      };
	    	$scope.$watch('slides.selected', function(){
	    		$scope.selectedSlides = $scope.slides[$scope.slides.selected];
	    	});
	    },
	    templateUrl: "views/partials/_slider.html"
	  };
	}]);