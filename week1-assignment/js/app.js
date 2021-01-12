(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {

  $scope.checkLunch =  function () {
    console.log($scope.lunchList);
    if(typeof $scope.lunchList === 'undefined') 
    {
      $scope.lunchMessage = "Please enter data first"
      $scope.messageStyle = "border:1px dotted red ; color:red"
      return;
    }
    var lunchCourses = $scope.lunchList.split(","); 
    console.log(lunchCourses);
    var numCourses = 0;
    for(var i =0; i < lunchCourses.length; i++)
    {
      if (lunchCourses[i].trim().length > 0)
        numCourses ++;
    }
    if(numCourses == 0){
      $scope.lunchMessage = "Please enter non empty first!"
      $scope.messageStyle = "border:1px dotted red ; color:red"
    }
    else if (numCourses < 4){
      $scope.lunchMessage = "Enjoy!"
      $scope.messageStyle = "border:1px dotted green ; color:green"
    }else{
      $scope.lunchMessage="Too Much!"
      $scope.messageStyle = "border:1px dotted green ; color:green"
    }
    console.log(numCourses);
  };
}

})();
