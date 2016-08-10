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
			
			// route for the skill page
            .when('/contact', {
                templateUrl : 'skill.html',
                controller  : 'skillController'
            });
			
    });

    // create the controller and inject Angular's $scope
    harinderResume.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    harinderResume.controller('aboutController', function($scope) {
        $scope.message = 'Web developer from Canada, Vancouver with 3 years of experience in web development. Strong client relationship management, user-facing and presentation skills. Reputation for success in handling multiple high-profile projects in stringent timelines. Highly adept at developing and implementing test strategies, release test plans, reviewing test case, data, operational procedures, quality methodologies, software development life cycle (SDLC) methodologies to support development and release of business applications. Involved in creating responsive, creative SEO friendly website, sitemap submission in various search engines. Extensive hands-on experience with PHP, WordPress, Joomla, Drupal, JavaScipt, JQuery, Ajax, SQL Server, MVC, CodeIgniter, Android and JAVA application development.';
    });

    harinderResume.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });