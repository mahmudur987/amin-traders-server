const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  photoUrl: {
    type: String,
    required: true,
  },
  address: String, // You can specify this as optional since it's an empty string in your example
});

const User = mongoose.model('User', userSchema);

module.exports = User;
