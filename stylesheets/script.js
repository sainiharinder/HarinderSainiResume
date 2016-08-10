// script.js

    // create the module and name it harinderResume
    var harinderResume = angular.module('harinderResume', []);

    // create the controller and inject Angular's $scope
    harinderResume.controller('mainController', function($scope) {

        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });
	
	 var harinderResume = angular.module('harinderResume', ['ngRoute']);

    // configure our routes
    harinderResume.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'contact.html',
                controller  : 'contactController'
            });
    });

    // create the controller and inject Angular's $scope
    harinderResume.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    harinderResume.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    harinderResume.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });