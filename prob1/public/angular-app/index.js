angular.module("meanGamesApp", ["ngRoute"]).config(config);

function config($routeProvider){
  $routeProvider
    .when("/games", {
      templateUrl: "angular-app/games/games.html",
      controller: "gamesController",
      controllerAs: "vm"
    })
    .when("/games/:gameId", {
      templateUrl: "angular-app/game/game.html",
      controller: "gameController",
      controllerAs: "vm"
    })
    .otherwise({
      redirectTo: "/"
    })
}