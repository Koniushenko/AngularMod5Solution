(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['regInfo']

function InfoController(regInfo) {
  var infoCtrl = this;  

  infoCtrl.regInfo = regInfo;

  infoCtrl.noInfo = function() {
    return (infoCtrl.regInfo.firstName == '');
  }

};
})();
