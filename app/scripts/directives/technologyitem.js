'use strict';

/**
 * @ngdoc directive
 * @name portfolioApp.directive:technologyItem
 * @description
 * # technologyItem
 */
angular.module('portfolioApp')
	.directive('technologyItem', function() {
	  return {
	    restrict: 'A',
	    scope: {
	      name: '@technologyItem'
	    },
	    link: function($scope){
	    	var deviconIcons = ["amazonwebservices", "android", "angularjs", "apache", "appcelerator", "apple", "atom", "backbonejs", "bitbucket", "bootstrap", "bower", "c", "chrome", "codeigniter", "coffeescript", "confluence", "cplusplus", "csharp", "css3", "d3js", "debian", "django", "docker", "doctrine", "dot-net", "drupal", "erlang", "firefox", "foundation", "gimp", "git", "github", "gitlab", "go", "grunt", "gulp", "heroku", "html5", "ie10", "illustrator", "inkscape", "java", "javascript", "jeet", "jetbrains", "jquery", "krakenjs", "laravel", "less", "linux", "meteor", "mongodb", "moodle", "mysql", "nginx", "nodejs", "nodewebkit", "oracle", "photoshop", "php", "phpstorm", "postgresql", "python", "rails", "react", "redhat", "redis", "ruby", "safari", "sass", "sourcetree", "ssh", "symfony", "travis", "trello", "ubuntu", "vim", "windows8", "wordpress", "yii", "zend"];
	      var key = $scope.name.replace(/ /g, '-').toLowerCase();
	      $scope.class = "fa fa-tag";
	      if($scope.name == "Web"){
	        $scope.class = "fa fa-globe";
	      } else if (deviconIcons.indexOf(key) > -1) {
	      	$scope.class = "devicon devicon-" + key + "-plain";
	      } else if (key == "ruby-on-rails"){
	      	$scope.class = "devicon devicon-rails-plain";
	      }

	      $scope.link = "#/technology/" + $scope.name;
	    },
	    templateUrl: "views/partials/_item.html"
	  };
	});



