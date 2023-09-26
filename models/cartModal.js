const mongoose = require('mongoose');

// Define the order schema
const cartSchema = new mongoose.Schema({
  userName: { type: String },
  userEmail: { type: String },
  serviceName: { type: String },
  packageName: { type: String },
  Gas: { type: mongoose.Schema.Types.ObjectId, ref: 'Gas' },
  Oil: { type: mongoose.Schema.Types.ObjectId, ref: 'Oil' },
  Bag: { type: mongoose.Schema.Types.ObjectId, ref: 'Bags' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  paymentAmount: { type: Number },
  Addingdate: { type: Date, default: Date.now },
});

// Create the Order model
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
