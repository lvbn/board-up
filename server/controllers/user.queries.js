const schema = require('../model/userSchema');
const mongoose = require('mongoose');

const User = mongoose.model('User', schema);

module.exports = {
  
  saveUser: async (firstname, lastname, username, email, status, mygames, myBUs, hosting, photo) => {
    const user = new User({ firstname, lastname, username, email, status, mygames, myBUs, hosting, photo });
    await user.save();
    console.log(user + 'saved');
    return
  },

  findUser: async (username) => {
    console.log(username)
    const user = await User.findOne({ username: username });
    console.log(user + ' found');
    return user
  }


}