const express = require('express');
const GasPackage = require('./../models/GasproductModal');
const app = require('../app');
app.use(express.json());

exports.getAllPackage = async (req, res) => {
  try {
    const result = await GasPackage.find();
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.postAllPackage = async (req, res) => {
  const data = req.body;

  try {
    const postAllPackage = await GasPackage.insertMany(data);
    return res.send({ status: 'success', data: postAllPackage });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};