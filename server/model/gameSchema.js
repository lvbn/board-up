const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({

  gameID: String,
  gameName: String,
  minplayers: Number,
  maxplayers: Number,
  playingtime: Number,
  image: String,

});

module.exports = gameSchema;