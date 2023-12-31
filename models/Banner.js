const mongoose = require('mongoose');

const validBackgroundOptions = [
  'homePage',
  'oilPage',
  'gasPage',
  'internetPage',
];

const BannerSchema = new mongoose.Schema({
  bannerFor: {
    type: String,
    enum: validBackgroundOptions,
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
  text: {
    type: String,
    default: '',
  },
  publishDate: {
    type: Date,
    default: Date.now,
  },
});

const HomePage = mongoose.model('Banner', BannerSchema);

module.exports = HomePage;
