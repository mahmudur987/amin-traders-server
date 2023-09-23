const RecentlyViewed = require('../models/recentlyViewedModal');
const cron = require('node-cron');
const app = require('../app');
// Middleware to log product views

exports.postRecentViewed = async (req, res) => {
  try {
    const data = req.body;
    const already = await RecentlyViewed.findOne(data);

    if (already) {
      return res.send({ status: 'already added' });
    }

    const result = await RecentlyViewed.create(data);

    console.log(result);

    return res.send({ status: 'success', data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};
exports.getAllRecentViewed = async (req, res) => {
  try {
    const result = await RecentlyViewed.find();
    // const result = (await RecentlyViewed.find()).filter((x) => x.userId);
    return res.send({ status: 'success', count: result.length, data: result });
  } catch (err) {
    return res.status(400).send({ status: 'Error', Error: err });
  }
};

cron.schedule('* * * * *', async () => {
  try {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 1);

    const result = await RecentlyViewed.deleteMany({
      viewedAt: { $lt: twoDaysAgo },
    });

    return { data: result };
  } catch (error) {
    console.error('Error in cron job:', error);
  }
});

exports.getRecentView = async (req, res) => {
  const userId = req.params.id;

  try {
    const viewedProducts = await RecentlyViewed.find({ userId }).sort({
      viewedAt: -1,
    });

    return res.send({
      status: 'success',
      count: viewedProducts.length,
      data: viewedProducts,
    });
  } catch (error) {}
};
