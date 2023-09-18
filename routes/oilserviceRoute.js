const express = require('express');
const router = express.Router();
const {
  getAllPackage,
  postAllPackage,
  deleteOilPackage,
  updateOilPackage,
  postAPackage,
} = require('./../controllers/oilServeceController');

router.route('/alloilpackage').get(getAllPackage).post(postAPackage);
router.route('/:id').post(updateOilPackage).delete(deleteOilPackage);
// router.route('/tour-states').get(getTourState);
// router.route('/monthly-plan/:year').get(getMonthlyPlan);
// router.route('/').get(getAllTours).post(createTours);
// router.route('/:id').get(getTour).patch(updateTours).delete(deleteTour);
module.exports = router;
