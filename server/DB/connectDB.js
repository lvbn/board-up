const mongoose = require('mongoose');

async function connectDB () {
  await mongoose.connect('mongodb://127.0.0.1:27017/boardUp', { useNewUrlParser: true });
  console.log('Connected to DB 🐰')
};


module.exports = connectDB;