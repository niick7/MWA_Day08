angular.module("meanGamesApp").controller("gamesController", gamesController);

function gamesController(gameDataFactory){
  const vm = this;
  gameDataFactory.getGames().then(function(response){
    vm.games = response;
  })
}