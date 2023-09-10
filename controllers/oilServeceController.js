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
exports.postAllPackage = async (req, res) => {
  const data = req.body;

  try {
    const postAllPackage = await OilPackage.insertMany(data);
    return res.send({ status: 'success', data: postAllPackage });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
