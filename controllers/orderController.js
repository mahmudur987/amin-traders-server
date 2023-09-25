const express = require('express');
const Order = require('../models/OrderModel');
const User = require('../models/userModel');
const app = require('../app');
app.use(express.json());

exports.postOrder = async (req, res) => {
  const data = req.body;

  try {
    const updateUser = await User.findOne({ email: data.userEmail });

    if (!updateUser) throw new Error('User not found');
    if (!updateUser.address) {
      updateUser.address = data.userAddress;
    }
    if (!updateUser.phoneNumber) {
      updateUser.phoneNumber = data.userPhoneNumber;
    }
    updateUser.save();

    const already = await Order.findOne(data);
    if (already) {
      return res.send({
        status: 'You have alradey orderd this Item',
        data: already,
      });
    }

    const postnewOrder = await Order.create(data);
    return res.send({
      status: 'You have Ordered successfully',
      data: postnewOrder,
      updateUser,
    });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getOrders = async (req, res) => {
  try {
    const result = await Order.find();
    return res.send({ status: 'success', count: result.length, data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getUserOrders = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Order.find({ user: id })
      .populate('Internet')
      .populate('user')
      .populate('Gas')
      .populate('Oil');
    return res.send({ status: 'success', count: result.length, data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.postOrderRecived = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Order.findByIdAndUpdate(id, {
      orderStatus: 'recived',
    });
    return res.send({ status: 'success', count: result.length, data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.postOrderDeliver = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Order.findByIdAndUpdate(
      id,
      {
        $set: {
          orderStatus: 'delivered',
          paymentStatus: 'paid',
          'delivery.status': true,
          'delivery.deliveryDate': new Date(),
        },
      },
      { new: true }
    );

    console.log('Updated document:', result); // Add this line

    return res.send({ status: 'success', count: result.length, data: result });
  } catch (err) {
    console.error('Error updating order:', err); // Add this line
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.orderDelete = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Order.findByIdAndRemove(id);
    return res.send({
      status: 'you have delete this item successfully',
      count: result.length,
      data: result,
    });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
