const Bootcamp = require('../models/Bootcamp');

// Get Bootcamps
exports.getBootCamps = (req, res, next) => {
  res.status(200).send("Get Boot");
};

// Get Bootcamp
exports.getBootCamp = (req, res, next) => {
  res.send(`Get bootcamp ${req.params.id}`);
};

// Post Bootcamp
exports.createBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(201).json({
    success: true,
    data: bootcamp
  })
};

// Update Bootcamp
exports.updateBootCamp = (req, res, next) => {
  res.send(`Update bootcamp ${req.params.id}`);
};

// Delete Bootcamps
exports.deleteBootCamp = (req, res, next) => {
  res.send(`Delete bootcamp ${req.params.id}`);
};
