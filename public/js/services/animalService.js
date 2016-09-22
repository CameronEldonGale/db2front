angular.module('animalApp')
.service('animalService', function($http){

  this.getAnimals = function(){
    return $http({
      method: 'GET',
      url: 'http://localhost:9001/api/animals'
    })
  }

  this.createAnimal = function(animal){
    return $http({
      method: 'POST',
      url: 'http://localhost:9001/api/animal',
      data: animal
    })
  }



})
