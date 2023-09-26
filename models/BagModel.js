const mongoose = require('mongoose');

const bagSchema = new mongoose.Schema({
  bagType: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  material: {
    type: String,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  totalorder: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
  offer: {
    isOffer: {
      type: Boolean,
      default: false,
    },
    lessPrice: {
      type: Number,
      default: 0,
    },
  },
  bestDeals: {
    type: Boolean,
    default: false,
  },
});

const Bag = mongoose.model('Bags', bagSchema);

module.exports = Bag;
