const mongoose = require('mongoose');

const internetPackageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  vat: {
    type: Boolean,
    default: false,
  },
  condition: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const InternetPackage = mongoose.model(
  'InternetPackage',
  internetPackageSchema
);

module.exports = InternetPackage;
