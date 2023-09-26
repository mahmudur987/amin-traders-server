const express = require('express');
const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const internetServiceRouter = require('./routes/internetServiceRoute');
const gasServiceRouter = require('./routes/gasServiceRoutes');
const oilServiceRouter = require('./routes/oilserviceRoute');
const userRouter = require('./routes/userRoute');
const orderRouter = require('./routes/orderRoute');
const cartRouter = require('./routes/cartRoute');
const internetUserRouter = require('./routes/internetUserRoute');
const bagRouter = require('./routes/bagRoute');
const BannerRouter = require('./routes/bannerRoute');
const recentViewedRouter = require('./routes/recentViewedRoute');
const extrahRouter = require('./routes/ExtrahRoute');
// middlewerre
dotenv.config();
app.use(express.json());

// Mongo Db connection
mongoose
  .connect(process.env.DATA_BASE, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(() => {
    console.log("Couldn't connect to MongoDB");
  });

// route

app.use('/internetservice', internetServiceRouter);
app.use('/gasservice', gasServiceRouter);
app.use('/oilservice', oilServiceRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/cart', cartRouter);
app.use('/internetusers', internetUserRouter);
app.use('/banner', BannerRouter);
app.use('/recentview', recentViewedRouter);
app.use('/extrah', extrahRouter);
app.use('/bag', bagRouter);

// server default route
app.get('/', (req, res) => {
  res.status(200).send('hellow world form server');
});
