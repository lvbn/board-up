const schema = require('../model/boardUpSchema');
const mongoose = require('mongoose');

const BoardUp = mongoose.model('BoardUp', schema);

module.exports = {

  findAll: async () => {
    const bus = await BoardUp.find();
    console.log( bus + 'all found')
    return bus
  },

  // gamename, gameimage, gameID
  saveBU: async (game, level, players, location, date, details, email) => {
    const bu = new BoardUp({ game, level, players, location, date, details, email });
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