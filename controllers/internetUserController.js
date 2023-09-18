const express = require('express');
const InternetUser = require('../models/InternetUserModel');
const app = require('../app');
app.use(express.json());

exports.postInternetUser = async (req, res) => {
  const data = req.body;
  const savedUser = await InternetUser.findOne({ email: data.email });

  if (savedUser) {
    return res.send({ status: 'success', data: savedUser });
  }

  try {
    const postnewUser = await InternetUser.create(data);
    return res.send({ status: 'success', data: postnewUser });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getInternetUsers = async (req, res) => {
  try {
    const result = await InternetUser.find();
    return res.send({ status: 'success', count: result.length, data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getInternetUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await InternetUser.findById(id);

    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.UpdateInternetBill = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const user = await InternetUser.findById(id);

    if (!user) {
      return res
        .status(400)
        .send({ status: 'Error', Error: 'User not found.' });
    }

    const MonthPaymentInfo = user?.PaymentInfo.find((payment) => {
      return payment.MonthName === data.MonthName;
    });

    if (MonthPaymentInfo) {
      MonthPaymentInfo.billAmount = data.billAmount;

      if (data.billAmount === 0) {
        MonthPaymentInfo.status = false;
        MonthPaymentInfo.DateOfBill = '';
      } else {
        MonthPaymentInfo.status = true;
        MonthPaymentInfo.DateOfBill = new Date();
      }

      // Save the updated user document using await
      await user.save();

      return res.send({ status: 'success', data: user });
    }

    return res.send({ status: 'error' });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.UpdateInternetUserInfo = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const user = await InternetUser.findByIdAndUpdate(id, data);

    return res.send({ status: 'success', data: user });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
