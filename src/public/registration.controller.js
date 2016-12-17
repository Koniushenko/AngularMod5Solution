(function () {
"use strict";

angular.module('public')
.controller('RegController', RegController);

RegController.$inject = ['MenuService']

function RegController(MenuService) {
  var regCtrl = this;
  regCtrl.found = true;

  regCtrl.submit = function() {
  	regCtrl.name = '';
  	var promise = MenuService.getFavoriteItem(regCtrl.dish.toUpperCase());
  	promise.then(function(response) {
				regCtrl.name = response.name;
				regCtrl.found = true;	
				MenuService.saveFavoriteItem(response);	
				MenuService.saveUserInfo(regCtrl);
			})
			.catch (function(error) {
				console.log(error.status)
				regCtrl.found = false;
			});  	
  };
};
})();
