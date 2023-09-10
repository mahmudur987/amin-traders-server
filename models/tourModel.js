const { default: mongoose } = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Tour must have a name'],
    unique: true,
    trim: true,
  },
  price: { type: Number, required: [true, 'Atour must have a price'] },
  priceDiscount: { type: Number },
  ratingAverage: { type: Number, default: 4.5 },

  ratingQuantity: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    required: [true, 'A Tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A Tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A Tour must have a difficulty'],
  },
  summary: {
    type: String,
    trim: true, //trim only work for string and it will work fpr string looks .if some one give space in front or back
    required: [true, 'A Tour must have a summary'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A Tour must have a image cover'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  startDates: [Date],
  reviews: String,
  slug: String,
  // durationWeeks: Number,
  locations: [Object],
  guides: [Object],
  secretTour: Boolean,
  startLocation: Object,
});

tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
