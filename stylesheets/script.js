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
			
			 // route for the skill page
            .when('/skill', {
                templateUrl : 'skill.html',
                controller  : 'skillController'
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
	harinderResume.controller('skillController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';alert("test");
		
var ctx = document.getElementById('my_canvas').getContext('2d');
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height; 
var diff;
function progressSim(){
	diff = ((al / 100) * Math.PI*2*10).toFixed(2);
	ctx.clearRect(0, 0, cw, ch);
	ctx.lineWidth = 10;
	ctx.fillStyle = '#09F';
	ctx.strokeStyle = "#09F";
	ctx.textAlign = 'center';
	ctx.fillText(al+'%', cw*.5, ch*.5+2, cw);
	ctx.beginPath();
	ctx.arc(35, 35, 30, start, diff/10+start, false);
	ctx.stroke();
	if(al >= 100){
		clearTimeout(sim);
	   
	}
	al++;
}
var sim = setInterval(progressSim, 50);

 angular.module("KendoDemos", [ "kendo.directives" ])
      .controller("MyCtrl", function($scope, $timeout){
          $scope.status = "Working...";
          $scope.css = 75;
		  $scope.HTML = 70;
		  $scope.PHP = 80;
		  $scope.JavaScript = 80;
		  $scope.JQuery = 75;
		  $scope.Angular = 40;
		  $scope.WordPress = 80;
		  $scope.Joomla = 85;
		  $scope.Drupal = 40;
		  $scope.CodeIgniter = 40;
		    $scope.Android = 50;
		  $scope.SQL = 85;
         
        
          
  })
		
    });

    harinderResume.controller('aboutController', function($scope) {
        $scope.message = 'Web developer from Canada, Vancouver with 3 years of experience in web development. Strong client relationship management, user-facing and presentation skills. Reputation for success in handling multiple high-profile projects in stringent timelines. Highly adept at developing and implementing test strategies, release test plans, reviewing test case, data, operational procedures, quality methodologies, software development life cycle (SDLC) methodologies to support development and release of business applications. Involved in creating responsive, creative SEO friendly website, sitemap submission in various search engines. Extensive hands-on experience with PHP, WordPress, Joomla, Drupal, JavaScipt, JQuery, Ajax, SQL Server, MVC, CodeIgniter, Android and JAVA application development.';
    });

    harinderResume.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
	
	