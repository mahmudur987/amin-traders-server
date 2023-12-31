const mongoose = require('mongoose');

const oilSchema = new mongoose.Schema({
  picture: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  publishDate: {
    type: Date,
    default: new Date(),
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
  bestDeals: {
    type: Boolean,
    default: false,
  },
});

const OilPackage = mongoose.model('Oil', oilSchema);

module.exports = OilPackage;
