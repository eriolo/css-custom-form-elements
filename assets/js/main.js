var app = angular.module('cvApp', []);

app.controller('navigationController', function($scope) {

	$scope.menuItems = [
		{'name':'First', 'url':'assets/app/views/first-view.html'},
		{'name':'Second', 'url':'assets/app/views/second-view.html'},
		{'name':'Third', 'url':'assets/app/views/third-view.html'}
	];

	$scope.navigationContent = 'assets/app/views/first-view.html';

	$scope.navItemClick = function(navItem) {

		$scope.navigationContent = navItem.url;

	};
});