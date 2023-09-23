const mongoose = require('mongoose');

const recentlyViewedSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  gasProduct: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Gas',
      unique: true,
    },
  ],
  bagProduct: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'InternetPackage',
    },
  ],
  oilProduct: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Oil',
    },
  ],
  viewedAt: { type: Date, default: Date.now },
});

const RecentlyViewed = mongoose.model('RecentlyViewed', recentlyViewedSchema);

module.exports = RecentlyViewed;