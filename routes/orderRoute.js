const express = require('express');
const router = express.Router();
const {
  postOrder,
  getOrders,
  postOrderRecived,
  postOrderDeliver,
  orderDelete,
} = require('../controllers/orderController');

router.route('/').get(getOrders).post(postOrder);
router.route('/:id').delete(orderDelete);
router.route('/orderrecive/:id').post(postOrderRecived);
router.route('/orderdeliver/:id').post(postOrderDeliver);
// router.route('/monthly-plan/:year').get(getMonthlyPlan);
// router.route('/').get(getAllTours).post(createTours);
// router.route('/:id').get(getTour).patch(updateTours).delete(deleteTour);
module.exports = router;
