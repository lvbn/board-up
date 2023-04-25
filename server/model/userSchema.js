const mongoose = require('mongoose');

//BU = Board-Up
const userSchema = new mongoose.Schema({
  
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    // required: true,
  },
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
  
  status: String,
  mygames: Array, //[Array of objects {gameName, experience]
  myBUs: Array, //Board-up id [Array of IDs]
  hosting: Array,
  photo: String,

});

module.exports = userSchema;