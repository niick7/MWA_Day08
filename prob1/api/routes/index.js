const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games-controller");

router.route("/games").get(gamesController.getGames);
router.route("/games/:gameId").get(gamesController.getGame);

module.exports = router;