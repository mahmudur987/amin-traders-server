const express = require('express');
const router = express.Router();
const {
  getAllTours,
  createTours,
  updateTours,
  getTour,
  deleteTour,
  aliasTopTour,
  getMonthlyPlan,
  getTourState,
} = require('./../controllers/tourControllers.js');

router.route('/top-5-cheap').get(aliasTopTour, getAllTours);
router.route('/tour-states').get(getTourState);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router.route('/').get(getAllTours).post(createTours);
router.route('/:id').get(getTour).patch(updateTours).delete(deleteTour);
module.exports = router;
