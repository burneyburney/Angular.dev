"use strict";

// angular module called templateTest

(function() {
    var app = angular.module("templateTest", []);
    <ul>
    	<li ng-repeat="num in [1, 2, 3, 4, 5, 6, 7, 8, 9]" ng-if="num % 3 == 0">
        	{{ num }} is even!
    	</li>
	</ul>

})();
