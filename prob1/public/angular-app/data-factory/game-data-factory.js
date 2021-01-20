angular.module("meanGamesApp").factory("gameDataFactory", gameDataFactory);

function gameDataFactory($http){
  return {
    getGames: getGames,
    getGame: getGame
  }

  function getGames(){
    return $http.get("/api/games").then(complete).catch(failed);
  }
  function getGame(id){
    return $http.get("/api/games/" + id).then(complete).catch(failed);
  }
  function complete(response){
    return response.data;
  }
  function failed(err){
    return err.statusText;
  }
}