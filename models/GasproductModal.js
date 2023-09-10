const mongoose = require('mongoose');

const gaspackageSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  valveSize: {
    type: String,
    required: true,
  },
  valveType: {
    type: String,
    required: true,
  },
  Brand: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  price: {
    type: Number,
    required: true,
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
    required: true,
  },
});

const GasPackage = mongoose.model('Product', gaspackageSchema);

module.exports = GasPackage;