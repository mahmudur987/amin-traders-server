const express = require('express');
const Order = require('../models/OrderModel');
const app = require('../app');
app.use(express.json());

exports.postOrder = async (req, res) => {
  const data = req.body;

  try {
    const postnewOrder = await Order.create(data);
    return res.send({ status: 'success', data: postnewUser });
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
