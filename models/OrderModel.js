const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  userName: { type: String },
  userEmail: { type: String },
  userPhoneNumber: { type: String },
  userAddress: { type: String },
  serviceName: { type: String },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'InternetPackage' },
  orderDate: { type: Date, default: Date.now },
  paymentAmount: Number,
  paymentStatus: String,
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
