(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var moveToBought = this;

  moveToBought.items = ShoppingListCheckOffService.getToBuyList();
  console.log(moveToBought.items);
  moveToBought.buyIt = function (itemIndex) {
    ShoppingListCheckOffService.updateBoughtList(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyList = [
    {name:"cookies",quantity:Math.floor(Math.random() * 10+1)},
    {name:"pepto bismol",quantity:Math.floor(Math.random() * 10+1)},
    {name:"kraft cheese",quantity:Math.floor(Math.random() * 10+1)},
    {name:"milk",quantity:Math.floor(Math.random() * 10+1)},
    {name:"pepsi",quantity:Math.floor(Math.random() * 10+1)}
  ];
  
  var alreadyBoughtList = [];

  service.updateBoughtList = function (itemIndex) {
    var mx = toBuyList.splice(itemIndex,1);
    var newItem = {
      name:mx[0].name,
      quantity:mx[0].quantity
    }
    alreadyBoughtList.push(newItem);
  };


  service.getToBuyList = function () {
    return toBuyList;
  };

  service.getBoughtItems = function () {
    return alreadyBoughtList;
  };
}

})();
