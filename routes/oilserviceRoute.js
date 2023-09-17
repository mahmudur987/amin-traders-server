const express = require('express');
const router = express.Router();
const {
  getAllPackage,
  postAllPackage,
  deleteOilPackage,
  updateOilPackage,
} = require('./../controllers/oilServeceController');
const { deleteGasPackage } = require('../controllers/GasServiceController');

router.route('/alloilpackage').get(getAllPackage).post(postAllPackage);
router.route('/:id ').post(updateOilPackage).delete(deleteGasPackage);
// router.route('/tour-states').get(getTourState);
// router.route('/monthly-plan/:year').get(getMonthlyPlan);
// router.route('/').get(getAllTours).post(createTours);
// router.route('/:id').get(getTour).patch(updateTours).delete(deleteTour);
module.exports = router;
