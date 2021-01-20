angular.module("meanGamesApp").controller("gameController", gameController);

function gameController(gameDataFactory, $routeParams) {
  const vm = this;
  const gameId = $routeParams.gameId;
  gameDataFactory.getGame(gameId).then(function(response){
    vm.game = response;
  })
}