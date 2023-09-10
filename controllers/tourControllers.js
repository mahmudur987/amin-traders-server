const express = require('express');
const Tour = require('./../models/tourModel');
const app = require('../app');
app.use(express.json());

exports.aliasTopTour = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingAverag,price';
  req.query.fields = 'name,price,ratingAverag,summary';

  next();
};

exports.getAllTours = async (req, res) => {
  // const result = await Tour.find()
  //   .where('duration')
  //   .equals(5)
  //   .where('difficulty')
  //   .equals('easy');
  try {
    // Build  query
    // 1A)filtering
    // http://localhost:8000/tours?difficulty=easy&duration=8
    let queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    excludedFields.forEach((el) => delete queryObj[el]);

    // 1b)advance filtering
    // http://localhost:8000/tours?difficulty=easy&duration[gte]=8
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Tour.find(JSON.parse(queryStr));
    // 2 ) sorting

    if (req.query.sort) {
      // http://localhost:8000/tours?sort=-price,-ratingAverage
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
      console.log(sortBy);
    } else query = query.sort('-createdAt');

    // 3 ) field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    // 4 ) pagination
    if (req.query.page || req.query.limit) {
      console.log(req.query);

      const page = (req.query.page * 1) | 1;
      const limit = req.query.limit * 1;
      const skip = (page - 1) * limit;
      console.log(page, limit, skip);
      query = query.skip(skip).limit(limit);
    }
    const result = await query;
    return res.send({
      status: 'success',
      length: result.length,
      tours: result,
    });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.createTours = async (req, res) => {
  const data = req.body;

  try {
    const newTour = await Tour.create(data);
    return res.send({ status: 'success', data: newTour });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};

exports.updateTours = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const result = await Tour.updateOne(
      { _id: id },
      { price: 500 },
      { new: true }
    );
    return res.send({
      status: 'success',
      tours: result,
    });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err.message });
  }
};
exports.getTour = async (req, res) => {
  //   console.log(req.baseUrl);
  //   console.log(req.path);
  const id = req.params.id;
  try {
    const result = await Tour.findOne({ _id: id });
    return res.send({ status: 'success', tour: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err.message });
  }
};

exports.deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Tour.findByIdAndDelete({ _id: id });
    return res.send({ status: 'Delete Success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err.message });
  }
};

// const testTour = new Tour(data);
// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//     res.send({ data: doc });
//   })
//   .catch((err) => {
//     console.error('Error', err);

//     res.send({ Error: err });
//   });

exports.getMonthlyPlan = async (req, res) => {
  try {
    const year = req.params.year * 1;

    const plan = await Tour.aggregate([
      {
        $unwind: { path: '$startDates' },
      },
      {
        $match: {
          startDates: {
            $gte: new Date(`${year}-01-01`),
            $lte: new Date(`${year}-12-31`),
          },
        },
      },
      {
        $group: {
          _id: { $month: '$startDates' },
          numTourStart: { $sum: 1 },
          tour: { $push: '$name' },
        },
      },
      {
        $addFields: { month: '$_id' },
      },
      {
        $project: {
          _id: 0,
        },
      },
      {
        $sort: {
          numTourStart: -1,
        },
      },
      {
        $limit: 6,
      },
    ]);
    console.log(year);
    return res.send({
      status: 'success',
      data: {
        results: plan.length,
        plan,
      },
    });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};

exports.getTourState = async (req, res) => {
  try {
    const states = await Tour.aggregate([
      {
        $match: { ratingAverage: { $gte: 4.5 } },
      },
      {
        $group: {
          _id: '$difficulty',
          num: { $sum: 1 },
          numRating: { $sum: '$ratingQuantity' },
          avgRating: { $avg: '$ratingAverage' },
          avgPrice: { $avg: '$price' },
          minPrice: { $min: '$price' },
          maxPrice: { $max: '$price' },
        },
      },
      {
        $sort: {
          avgPrice: -1,
        },
      },
      {
        $match: {
          _id: { $ne: 'easy' },
        },
      },
    ]);
    return res.send({
      status: 'success',
      data: {
        results: states.length,
        states,
      },
    });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
