const {
  AddressDetails,
  Feedback,
  ICR,
  AboutUs,
} = require('../models/ExtrahModel');

// home address details
exports.postAddressDetails = async (req, res) => {
  const data = req.body;
  try {
    const result = await AddressDetails.findOneAndUpdate(
      { _id: data._id },
      data
    );

    return res.send({ status: 'Successfully Update', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};

exports.getAddressDetails = async (req, res) => {
  try {
    const result = await AddressDetails.find();

    return res.send({ status: 'Successfully', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};

// users  feedback
exports.postFedback = async (req, res) => {
  const data = req.body;

  try {
    const already = await Feedback.findOne({ email: data?.email });
    if (already) {
      already.message = data.message;
      already.postTime = new Date();
      already.save();

      return res.send({ status: 'update your Feedback', data: already });
    }
    const result = await Feedback.create(data);
    return res.send({ status: 'Successfully Added', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getFedbacks = async (req, res) => {
  try {
    const result = await Feedback.find().sort({ postTime: -1 });
    return res.send({
      status: 'Successfully Update',
      count: result.length,
      data: result,
    });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.deleteFedback = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Feedback.findByIdAndDelete(id);

    return res.send({ status: 'Successfully Delete', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};

// Internet-connection-req

exports.postInternetConnectionRequest = async (req, res) => {
  const data = req.body;

  try {
    const already = await ICR.findOne(data);
    if (already) {
      return res.send({
        status: 'You already submit same request',
        data: already,
      });
    }
    const result = await ICR.create(data);
    return res.send({ status: 'Successfully Send the request', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getInternetConnectionRequest = async (req, res) => {
  try {
    const result = await ICR.find();
    return res.send({ status: 'Successfully ', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};

// AboutUs

exports.postAboutus = async (req, res) => {
  const data = req.body;
  const id = data.id;

  try {
    const result = await AboutUs.findByIdAndUpdate(id, data);
    return res.send({ status: 'Successfully Send the request', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getAboutUs = async (req, res) => {
  try {
    const result = await AboutUs.find();
    return res.send({ status: 'Successfully ', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
