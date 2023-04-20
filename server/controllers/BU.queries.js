const schema = require('../model/boardUpSchema');
const mongoose = require('mongoose');

const BoardUp = mongoose.model('BoardUp', schema);

module.exports = {

  findAll: async () => {
    const bus = await BoardUp.find();
    console.log( bus + 'all found')
    return bus
  },

  saveBU: async (gameName, gameLevel, maxNoOfParticipants, location, date, details, contactInfo) => {
    const bu = new BoardUp({ gameName, gameLevel, maxNoOfParticipants, location, date, details, contactInfo });
    await bu.save();
    console.log('board-up saved')
    return
  },

  deleteBU: async (ID) => {
    // awaitBoardUp.deleteOne({ id: ID });
    // console.log('boardBoardUp deleted')
    // return
  }

}