/* Routes for angularjs */

angular.module('wenshark', [])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/search/:query', {controller: SearchCtrl, templateUrl: '/Assets/partials/search.html'})
			.when('/error', {templateUrl: '/Assets/partials/error.html'})
			.when('/', {controller:MainCtrl, templateUrl: '/Assets/partials/main.html'})
			.when('/upload', { controller: UploadCtrl, templateUrl: '/Assets/partials/upload.html' })
			.otherwise({redirectTo: '/error'});
	}]);