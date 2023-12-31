const express = require('express');
const User = require('../models/userModel');
const app = require('../app');
app.use(express.json());

exports.postUser = async (req, res) => {
  const data = req.body;
  const savedUser = await User.findOne({ email: data.email });

  if (savedUser) {
    return res.send({ status: 'success', data: savedUser });
  }

  try {
    const postnewUser = await User.create(data);
    return res.send({ status: 'success', data: postnewUser });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const result = await User.find();
    return res.send({ status: 'success', count: result.length, data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};

exports.getUser = async (req, res) => {
  const email = req.params.email;
  try {
    const result = await User.findOne({ email });

    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.updateUser = async (req, res) => {
  const email = req.params.email;
  const data = req.body;
  try {
    const result = await User.findOneAndUpdate({ email }, data);

    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
