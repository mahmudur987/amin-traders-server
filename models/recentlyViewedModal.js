const mongoose = require('mongoose');

const recentlyViewedSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  gasProductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Gas',
  },

  oilProductId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Oil',
  },
  viewedAt: { type: Date, default: Date.now },
  userEmail: {
    type: String,
  },
  serviceName: {
    type: String,
  },
  packageName: {
    type: String,
  },
});

const RecentlyViewed = mongoose.model('RecentlyViewes', recentlyViewedSchema);

module.exports = RecentlyViewed;
