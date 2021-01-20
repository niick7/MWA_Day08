const mongoose = require("mongoose");
const Game = mongoose.model("Game");

module.exports.getGames = function(req, res) {
  let offset = 1;
  let count = 20;
  if(req.query) {
    if(req.query.offset)
      offset = parseInt(req.query.offset);
    if(req.query.count)
      count = parseInt(req.query.count);
  }
  if(isNaN(offset) || isNaN(count)){
    res.status(400).json({message: "Offset and Count must be number."});
    return;
  }

  Game.find().skip(offset).limit(count).exec(function(err, games){
    const response = {
      status: 200,
      message: games
    }
    if (err) {
      response.status = 500;
      response.message = err;
    }
    res.status(response.status).json(response.message);
  })
}

module.exports.getGame = function(req, res) {
  const gameId = req.params.gameId;
  Game.findById(gameId).exec(function(err, game){
    response = {
      status: 200,
      message: game
    }
    if(err) {
      response.status = 500;
      response.message = err;
    }
    if(!game) {
      response.status = 404;
      response.message = { message: "Game ID is not found." }
    }
    res.status(response.status).json(response.message);
  })
}