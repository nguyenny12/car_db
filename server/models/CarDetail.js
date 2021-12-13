const mongoose = require('mongoose');

const CarDetail = mongoose.model(
  'CarDetail',
  new mongoose.Schema({
    _id: String,
    size_volume: {
      type: Number,
      ref: 'SizeVolume',
    },
    engine_transmission: {
      type: Number,
      ref: 'EngineTransmission',
    },
    furniture: {
      type: Number,
      ref: 'Furniture',
    },
    exterior: {
      type: Number,
      ref: 'Exterior',
    },
  }),
  'car_details'
);

module.exports = CarDetail;
