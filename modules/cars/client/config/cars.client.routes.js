'use strict';

// Setting up route
angular.module('cars').config(['$stateProvider','$locationProvider',
	function($stateProvider,$locationProvider) {
		// Cars state routing
		$stateProvider.
		state('listCars', {
			url: '/cars',
			templateUrl: '/modules/cars/client/views/list-cars.client.view.html'
		}).
		state('createCar', {
			url: '/cars/create',
			templateUrl: '/modules/cars/client/views/create-car.client.view.html'
		}).
		state('viewCar', {
			url: '/cars/:carId',
			templateUrl: '/modules/cars/client/views/view-car.client.view.html'
		}).
		state('searchCar', {
			url: '/search',
			templateUrl: '/modules/cars/client/views/search-car.client.view.html'
		}).
		state('editCar', {
			url: '/cars/:carId/edit',
			templateUrl: '/modules/cars/client/views/edit-car.client.view.html'
		});

		// $locationProvider.html5Mode({enabled: true, requireBase: false});
	}

	
]);