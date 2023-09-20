const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  userName: { type: String },
  userEmail: { type: String },
  userPhoneNumber: { type: String },
  userAddress: { type: String },
  serviceName: { type: String },
  packageName: { type: String },
  packageId: { type: mongoose.Schema.Types.ObjectId, ref: 'InternetPackage' },
  orderDate: { type: Date, default: Date.now },
  paymentAmount: { type: Number },
  paymentStatus: { type: String },
  orderStatus: { type: String },
  orderQuantity: { type: Number },
  delivery: {
    status: { type: Boolean, default: false },
    deliveryDate: { type: Date },
  },
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
