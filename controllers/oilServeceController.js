const express = require('express');
const cors = require('cors');
const OilPackage = require('./../models/oilServiceModal');
const app = require('../app');
app.use(express.json());
app.use(cors());

exports.getAllPackage = async (req, res) => {
  try {
    const result = await OilPackage.find();
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getAPackage = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await OilPackage.findById(id);
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.postAllPackage = async (req, res) => {
  const data = req.body;

  try {
    const postAllPackage = await OilPackage.insertMany(data);
    return res.send({ status: 'success', data: postAllPackage });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.postAPackage = async (req, res) => {
  const data = req.body;

  try {
    const result = await OilPackage.create(data);
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.updateOilPackage = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const result = await OilPackage.findByIdAndUpdate(id, data);
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.deleteOilPackage = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await OilPackage.findByIdAndDelete(id);

    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
