angular.module('animalApp')
.controller('mainCtrl', function($scope, animalService){
  $scope.getAnimals = function(){
    animalService.getAnimals().then(function(res){
      console.log(res);
      $scope.animals = res.data;
    })
  }
})
