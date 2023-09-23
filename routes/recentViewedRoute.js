const express = require('express');
const router = express.Router();
const {
  postRecentViewed,
  getAllRecentViewed,
  getRecentView,
} = require('../controllers/recentlyViewedController');

router.route('/').post(postRecentViewed).get(getAllRecentViewed);
router.route('/:id').get(getRecentView);

module.exports = router;
