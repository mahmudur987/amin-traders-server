const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  userName: { type: String },
  userEmail: { type: String },
  userPhoneNumber: { type: String },
  userAddress: { type: String },
  serviceName: { type: String },
  packageName: { type: String },
  Internet: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InternetPackage',
    },
  ],
  Oil: [
    {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'Oil',
    },
  ],
  Gas: [
    {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'Gas',
    },
  ],
  Bag: [
    {
      type: mongoose.Schema.Types.ObjectId,

      ref: 'Bags',
    },
  ],
  orderDate: { type: Date, default: Date.now },
  paymentAmount: { type: Number },
  paymentStatus: { type: String },
  orderStatus: { type: String, default: 'pending' },
  orderQuantity: { type: Number, default: 1 },
  onlinePayment: {
    PaymentMethod: {
      type: String,
    },
    transactionId: {
      type: String,
    },
    userPhoneNumber: {
      type: String,
    },
  },
  delivery: {
    status: { type: Boolean, default: false },
    deliveryDate: { type: Date },
  },
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
