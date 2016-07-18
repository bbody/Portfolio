'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:screenshotSlider
 * @description
 * # screenshotSlider
 */
angular.module('portfolioApp')
	.directive('screenshotSlider', ['$translate', '$log', '$uibModal', function($translate, $uibModal, $log){
	  return {
	    restrict: 'A',
	    scope: {
	      slides: '='
	    },
	    link: function($scope){
	    	$scope.selectedSlides = $scope.slides[$scope.slides.selected];
	      $scope.openModal = function(selectedSlides, index, $event){
	        var modalInstance = $uibModal.open({
	          animation: true,
	          templateUrl: 'portfolio-item/modal-template.html',
	          controller: 'ModalCtrl',
	          size: 'lg',
	          resolve: {
	            items: function () {
	              return $scope.items;
	            }
	          }
	        });

	        modalInstance.result.then(function (selectedItem) {
	          $scope.selected = selectedItem;
	        }, function () {
	          $log.info('Modal dismissed at: ' + new Date());
	        });

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