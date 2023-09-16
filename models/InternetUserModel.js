const mongoose = require('mongoose');

// Define the schema for PaymentInfo
const PaymentInfoSchema = new mongoose.Schema({
  MonthName: String,
  status: Boolean,
  billAmount: Number,
  DateOfBill: String, // You might want to use a Date type here instead of String if you plan to store actual dates
});

// Define the schema for the main user data
const UserSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  email: String,
  address: String,
  serviceName: String,
  packageName: String,
  PaymentInfo: [PaymentInfoSchema], // Embed the PaymentInfo subdocument array
});

// Create a Mongoose model for the User schema
const InternetUser = mongoose.model('Internet User', UserSchema);

module.exports = InternetUser;
