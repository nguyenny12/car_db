const mongoose = require('mongoose');

const Car = mongoose.model(
  'Car',
  new mongoose.Schema({
    _id: String,
    name: String,
    year: Date,
    image: {
      type: String,
      ref: 'GFS',
    },
    prices: String,
    number: Number,
    node: String,
    car_model: {
      type: Number,
      ref: 'CarModel',
    },
    car_detail: {
      type: Number,
      ref: 'CarDetail',
    },
  })
);

module.exports = Car;
