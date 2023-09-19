const express = require('express');
const Banner = require('../models/Banner');
const app = require('../app');
app.use(express.json());

exports.postBanner = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const postBanner = await Banner.create(data);
    // const postBanner = await Banner.insertMany(data);
    return res.send({ status: 'success', data: postBanner });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getBanners = async (req, res) => {
  try {
    const result = await Banner.find();
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.deleteBanner = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const result = await Banner.findByIdAndRemove(id);
    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
