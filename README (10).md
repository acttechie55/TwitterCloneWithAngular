### Instructions

The objective of this project is to convert the mock twitter into an Angular application.

#### Further Reading
Angular [docs](https://docs.angularjs.org/api/ng)
Angular usage [examples](https://github.com/curran/screencasts/tree/gh-pages/introToAngular)

### Basic Req's
Utilize Angular's built in functionality to simplify your client side code. Consult the angular [docs](https://docs.angularjs.org/guide/introduction)
Note: During this project, always choose to code using angular templating instead of using plain javascript and html. Review Dependency Injection, '$location','$scope', $resource', 'ngResource', 'ngRoute', '$routeProvider', '$http', '$rootScope' as they may be needed

##### client
* html - Style your application .
	* index.html - The following compenents are included as [cdns](https://en.wikipedia.org/wiki/Content_delivery_network) in the html page: jquery, bootstrap (css and js), angular, angular-route, angular-resource and momentjs. Make edits if needed to customize but index.html has been implemented already. Take time to view the structure and note ng-view. This is where the other view templates will injected.
	* Complete tweets.html and welcome.html
	* welcome should be the landing page and allow the user to input a username. The username will be bound to the global [$scope](https://docs.angularjs.org/guide/scope) and navigate to the tweets view once entered.
	* tweets should display a list of tweets using ng-repeat.
* main.js - angular to handle the behavior on the client side of the application
	* postData:
		* create a jquery ajax request to post a new tweet
		* each message should be an object with text and userName properties (may use default username)
	* getData:
		* create a jquery ajax request to get all tweets from the backend.
		* Note: data is stored in a .txt file. Keep that in mind when parsing data for display
	* Use jquery to enable the submit button

##### server
* server.js - server side code with [nodejs](https://nodejs.org/en/docs/)
	* Create a server to handle get and post requests from front end.
	Note: Server side code will look similar to the code MyTweets project.

* data.json - json file containing tweets and where future tweets will be written.
	* [JSON](http://www.copterlabs.com/blog/json-what-it-is-how-it-works-how-to-use-it/)

### Extra Credit
* Use browserfiy to require modules on the client side

### Extra Extra Credit
* Use parse.com for database storage