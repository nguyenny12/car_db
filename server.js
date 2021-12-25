const {
  customers,
  size_volumes,
  exteriors,
  furniture,
  engine_transmissions,
  car_models,
  cars,
  car_details,
  files,
} = require('./record');
const Customer = require('./server/models/Customer');
const AdminLogin = require('./server/models/AdminLogin');
const SizeVolume = require('./server/models/SizeVolume');
const Exterior = require('./server/models/Exterior');
const Furniture = require('./server/models/Furniture');
const EngineTransmission = require('./server/models/EngineTransmission');
const CarDetail = require('./server/models/CarDetail');
const Car = require('./server/models/Car');
const GFS = require('./server/models/GFS');
const CarModel = require('./server/models/CarModel');
const mongoose = require('mongoose');
const path = require('path');
const grid = require('gridfs-stream');
const fs = require('fs');

// make a connection
mongoose.connect(
  'mongodb+srv://khoa:khoa123@cluster0.1rqpo.mongodb.net/car?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// get reference to database
var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));

connection.once('open', function () {
  console.log('Connection Successful!');

  // Create record Admin Login
  // const admin_login = new AdminLogin({
  //   _id: 1,
  //   username: 'admin',
  //   password: 'admin',
  // });
  // admin_login.save();

  // Create record customer
  // customers.forEach((element) => {
  //   var c = new Customer(element);
  //   c.save(function (err, c) {
  //     if (err) return console.error(err);
  //   });
  // });

  // Create record size volume
  size_volumes.forEach((element) => {
    var sv = new SizeVolume(element);
    sv.save(function (err, sv) {
      if (err) return console.error(err);
    });
  });

  // Create engine transmission
  engine_transmissions.forEach((element) => {
    var et = new EngineTransmission(element);
    et.save(function (err, et) {
      if (err) return console.error(err);
    });
  });

  // Create record furniture
  furniture.forEach((element) => {
    var f = new Furniture(element);
    f.save(function (err, f) {
      if (err) return console.error(err);
    });
  });

  // Create record exterior
  exteriors.forEach((element) => {
    var e = new Exterior(element);
    e.save(function (err, e) {
      if (err) return console.error(err);
    });
  });

  // Create record car detail
  car_details.forEach((element) => {
    var cd = new CarDetail(element);
    cd.save(function (err, cd) {
      if (err) return console.error(err);
    });
  });

  // Create record car model
  // car_models.forEach((element) => {
  //   var cm = new CarModel(element);
  //   cm.save(function (err, cm) {
  //     if (err) return console.error(err);
  //   });
  // });

  // Create gridfs
  files.forEach((element) => {
    var file_src = path.join(__dirname, element.file_src);
    var gridFs = grid(connection.db, mongoose.mongo);

    if (gridFs) {
      var stream_write = gridFs.createWriteStream({
        _id: element._id,
        filename: element.file_name,
      });
      fs.createReadStream(file_src).pipe(stream_write);
      stream_write.on('close', function (file) {
        console.log('Insert image successfully');
      });
    } else {
      console.log('Sorry No Grid FS Object');
    }
  });

  // Create record car
  // cars.forEach((element) => {
  //   var c = new Car(element);
  //   c.save(function (err, c) {
  //     if (err) return console.error(err);
  //   });
  // });

  // Test dữ liệu
  Car.find({})
    .lean()
    .populate('image')
    .exec(function (err, doc) {
      if (err) {
        console.log(err);
      }
      console.log(doc);
    });
});
