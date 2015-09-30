/*This is the Code-School Method (Module and Controller on same page)*/

var myApp = angular.module('myApp', ['ngRoute']);
	myApp.controller('TweetsController', ['$scope', '$http', function($scope, $http){
		//$scope.tweets = [];
		//$scope.userName = 'Afftene';
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
			//controller: 'WelcomeController',
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