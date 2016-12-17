(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var favoriteItem, firstName = '', secondName, email, phone;
  


  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavoriteItem = function(shortName) {
    var promise = $http.get(ApiPath + '/menu_items/' + shortName + '.json')
    .then( function(response) {
      return response.data;
    })
    // .catch (function(error) {
    //     console.log(error.status)
    //   });
    return promise;
    // .reject( function(error) {
    //   return error.message;
    // })
  }

  service.saveFavoriteItem = function(item) {
    favoriteItem = item;
  };

  service.saveUserInfo = function(user) {
    firstName = user.firstName;
    secondName = user.secondName;
    email = user.email;
    phone = user.phone;   
  };

  service.getRegInfo = function() {
    var regInfo = { 'firstName' : firstName, 
                    'secondName' : secondName,
                    'email' : email,
                    'phone' : phone,
                    'favoriteItem' : favoriteItem
                  };
    return regInfo;
  };

}



})();
