const express = require('express');
const router = express.Router();
const {
  postBanner,
  getBanners,
  deleteBanner,
} = require('../controllers/bannerController');

router.route('/').get(getBanners).post(postBanner);
router.route('/:id').delete(deleteBanner);

module.exports = router;
