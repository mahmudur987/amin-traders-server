const express = require('express');
const router = express.Router();
const {
  getAllPackage,
  postAllPackage,
  deleteGasPackage,
  updateGasPackage,
} = require('./../controllers/GasServiceController');

router.route('/allgaspackage').get(getAllPackage).post(postAllPackage);
router.route('/:id').post(updateGasPackage).delete(deleteGasPackage);
// router.route('/monthly-plan/:year').get(getMonthlyPlan);
// router.route('/').get(getAllTours).post(createTours);
// router.route('/:id').get(getTour).patch(updateTours).delete(deleteTour);
module.exports = router;
