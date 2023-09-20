const express = require('express');
const router = express.Router();
const {
  postCart,
  getCarts,
  updatecart,
  deleteCart,
} = require('../controllers/cartController');

router.route('/').get(getCarts).post(postCart);
router.route('/:id').delete(deleteCart).post(updatecart);

module.exports = router;
