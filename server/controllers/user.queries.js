const schema = require('../model/userSchema');
const mongoose = require('mongoose');

const User = mongoose.model('User', schema);

module.exports = {
  
  saveUser: async (firstname, lastname, username, email, status, mygames, myBUs, photo) => {
    const user = new User({ firstname, lastname, username, email, status, mygames, myBUs, photo });
    await user.save();
    console.log(user + 'saved');
    return
  },

  findUser: async (id) => {
    const user = await User.findById(id);
    console.log(user + ' found');
    return user
  }


}