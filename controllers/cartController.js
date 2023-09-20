const express = require('express');
const Cart = require('../models/cartModal');

const app = require('../app');
app.use(express.json());

exports.postCart = async (req, res) => {
  const data = req.body;
  const sameCart = await Cart.findOne(data);

  if (sameCart) {
    return res.send({ status: 'Already Added', data: sameCart });
  }
  try {
    const postnewcart = await Cart.create(data);

    return res.send({ status: 'Successfully Added', data: postnewcart });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getCarts = async (req, res) => {
  try {
    const result = await Cart.find();
    return res.send({ status: 'success', count: result.length, data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.updatecart = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await Order.findByIdAndUpdate(id, data);
    return res.send({ status: 'success', count: result.length, data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};

exports.deleteCart = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Cart.findByIdAndRemove(id);
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
