/*This is the Code-School Method (Module and Controller on same page)*/

var myApp = angular.module('myApp', ['ngRoute']);
	myApp.controller('TweetsController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope){
		//$scope.tweets = [];
		$scope.userName = $rootScope.loggedInUser;
		$http.get('/messages')
			.success(function(tweets) {
				$scope.tweets = tweets.reverse();
			})
			.error(function(err) {
				console.error(err);
			});
		$scope.postTweet = function(){
			var tweet = {
				text: $scope.tweet,
				user: $scope.tweetUser
			};
			$http.post('/messages', tweet)
			.success(function() {
				$http.get('/messages')
			.success(function (messages) {
				$scope.tweets = messages.reverse();
			})
			.error(function(err) {
				console.error(err);
			});
		})
		}
	}])
	
	myApp.config(function($routeProvider){
		$routeProvider
		.when('/login', {
			controller: 'WelcomeController',
			templateUrl: '../views/welcome.html'
		})
		.when('/mytweets', {
			controller: 'TweetsController',
			templateUrl: '../views/tweets.html'
		})
		.otherwise ({
			redirectTo: '/login'
		});
	});
		
//Creating a Welcome Controller//
myApp.controller('WelcomeController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
//Attempting to get my log-in button to click to my tweets page//	
	$scope.login = function(){
		$rootScope.loggedInUser = $scope.loginName;
		$location.path('/mytweets');
	};

}]);