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
// router.route('/monthly-plan/:year').get(getMonthlyPlan);
// router.route('/').get(getAllTours).post(createTours);
// router.route('/:id').get(getTour).patch(updateTours).delete(deleteTour);
module.exports = router;
