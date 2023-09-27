const express = require('express');
const router = express.Router();
const {
  getAddressDetails,
  postAddressDetails,
  getFedbacks,
  postFedback,
  deleteFedback,
  postInternetConnectionRequest,
  getInternetConnectionRequest,
  getAboutUs,
  postAboutus,
  UpdateInternetConnectionRequest,
  DeleteInternetConnectionRequest,
} = require('../controllers/ExtrahController');

router.route('/').get(getAddressDetails);
router.route('/update-address').patch(postAddressDetails);
router.route('/feedback').post(postFedback).get(getFedbacks);
router.route('/feedback/:id').delete(deleteFedback);
router
  .route('/inter-connection-request')
  .post(postInternetConnectionRequest)
  .get(getInternetConnectionRequest);
router
  .route('/inter-connection-request/:id')
  .post(UpdateInternetConnectionRequest)
  .delete(DeleteInternetConnectionRequest);

router.route('/aboutus').get(getAboutUs).post(postAboutus);

module.exports = router;
