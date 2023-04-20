const mongoose = require('mongoose');

//BU = Board-Up
const userSchema = new mongoose.Schema({
  
  firstname: String,

  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  
  games: Array, //[Array of objects {gameName, experience]
  myBUs: Array, //Board-up id [Array of IDs]

});

module.exports = userSchema;