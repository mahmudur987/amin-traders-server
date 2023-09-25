const mongoose = require('mongoose');

const addressDetailsSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
  },
  facebook: {
    type: String,
    required: true,
  },
  twiter: {
    type: String,
    required: true,
  },
  youtube: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  officeTime: {
    type: String,
    required: true,
  },
});
const AddressDetails = mongoose.model('AddressDetails', addressDetailsSchema);

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  postTime: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.model('Feedbacks', contactSchema);

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  deleveryStatus: {
    type: String,
    default: 'pending',
  },
});

const ICR = mongoose.model('InternetConnectionRequest', userSchema);

const AboutUsSchema = new mongoose.Schema({
  aboutFor: {
    type: String,
    enum: ['homePage', 'oilPage', 'gasPage', 'internetPage', 'bagPage'],
    default: 'homePage',
  },
  ImageUrl: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    default: '',
  },
  text1: {
    type: String,
    default: '',
  },
  text2: {
    type: String,
    default: '',
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
});

const AboutUs = mongoose.model('AboutUs', AboutUsSchema);

module.exports = { AddressDetails, Feedback, ICR, AboutUs };
