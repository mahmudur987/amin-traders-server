const express = require('express');
const Bag = require('./../models/BagModel');
const app = require('../app');
app.use(express.json());

exports.getAllBag = async (req, res) => {
  try {
    const result = await Bag.find();
    return res.send({ status: 'success', count: result.length, data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};

exports.getAbag = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Bag.findById(id);
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.postAllBag = async (req, res) => {
  const data = req.body;

  try {
    const postAllPackage = await Bag.insertMany(data);
    return res.send({ status: 'success', data: postAllPackage });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.postBag = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const result = await GasPackage.create(data);
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.updateBag = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await Bag.findByIdAndUpdate(id, data);

    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.deleteBag = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Bag.findByIdAndDelete(id);

    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
