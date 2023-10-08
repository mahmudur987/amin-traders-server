const mongoose = require('mongoose');

const gaspackageSchema = new mongoose.Schema({
  picture: {
    type: String,
  },
  name: {
    type: String,
  },
  quantity: {
    type: String,
  },
  valveSize: {
    type: String,
  },
  valveType: {
    type: String,
  },
  Brand: {
    type: String,
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
  },
  offer: {
    isOffer: {
      type: Boolean,
      default: false,
    },
    lessPrice: {
      type: Number,
    },
  },
  use: {
    type: String,
  },
  bestDeals: {
    type: Boolean,
    default: false,
  },
});

const GasPackage = mongoose.model('Gas', gaspackageSchema);

module.exports = GasPackage;
