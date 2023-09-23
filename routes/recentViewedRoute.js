const express = require('express');
const router = express.Router();
const {
  postRecentViewed,
  getRecentViewed,
  getRecentView,
} = require('../controllers/recentlyViewedController');

router.route('/').post(postRecentViewed).get(getRecentViewed);
router.route('/:id').get(getRecentView);

module.exports = router;
