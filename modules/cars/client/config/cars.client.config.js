'use strict';

// Configuring the Cars module
angular.module('cars').run(['menuService',
	function(Menus) {
		// Set top bar menu items

		Menus.addMenuItem('topbar', {
          title: 'Cars',
          state: 'cars',
          type: 'dropdown',
          roles: ['*']
        });
		Menus.addSubMenuItem('topbar','cars', {
          title: 'List Cars',
          state: 'listCars',
          roles: ['*']
        });
		Menus.addSubMenuItem('topbar','cars', {
          title: 'Add A Car',
          state: 'createCar',
          roles: ['user', 'admin']
        });
	}
]);