const express = require('express');
const router = express.Router();
const {
  getInternetUser,
  getInternetUsers,
  postInternetUser,
  UpdateInternetBill,
  UpdateInternetUserInfo,
} = require('../controllers/internetUserController');

router.route('/').get(getInternetUsers).post(postInternetUser);
router
  .route('/:id')
  .get(getInternetUser)
  .post(UpdateInternetBill)
  .patch(UpdateInternetUserInfo);
// router.route('/tour-states').get(getTourState);
// router.route('/monthly-plan/:year').get(getMonthlyPlan);
// router.route('/').get(getAllTours).post(createTours);
// router.route('/:id').get(getTour).patch(updateTours).delete(deleteTour);
module.exports = router;
