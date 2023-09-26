const express = require('express');
const router = express.Router();
const {
  deleteBag,
  postBag,
  getAllBag,
  getAbag,
  updateBag,
  postAllBag,
} = require('./../controllers/bagController');

router.route('/').get(getAllBag).post(postBag);
router.route('/:id').get(getAbag).post(updateBag).delete(deleteBag);

module.exports = router;
