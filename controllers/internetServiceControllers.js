const express = require('express');
const InternetPackage = require('./../models/internetPackageModal');
const app = require('../app');
app.use(express.json());

exports.getAllPackage = async (req, res) => {
  try {
    const result = await InternetPackage.find();
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.postAllPackage = async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    const postAllPackage = await InternetPackage.insertMany(data);
    return res.send({ status: 'success', data: postAllPackage });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
