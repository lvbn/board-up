const mongoose = require('mongoose');

//BU= Board-Up

const BUSchema = new mongoose.Schema({
  
  gameName: String,
  gameLevel: String,
  maxNoOfParticipants: Number, //How many players are needed?
  
  location: String,
  date: Date, //time: String, //Check if needed?, perhaps together with date

  // hostID: String,
  // hostUserName: String,
  hostEmail: String,
  details: String, //Tell us more about the board-up
  // contactInfo: String, 
  
});

module.exports = BUSchema;