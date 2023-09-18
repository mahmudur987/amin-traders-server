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
exports.postPackage = async (req, res) => {
  const data = req.body;

  try {
    const result = await InternetPackage.create(data);
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.updateInternetPackage = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await InternetPackage.findByIdAndUpdate(id, data);

    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.deleteInternetPackage = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await InternetPackage.findByIdAndDelete(id);

    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
