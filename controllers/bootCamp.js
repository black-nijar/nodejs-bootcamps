const Bootcamp = require("../models/Bootcamp");

// Get Bootcamps
exports.getBootCamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// Get Bootcamp
exports.getBootCamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    if (!bootcamp) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// Post Bootcamp
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// Update Bootcamp
exports.updateBootCamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!bootcamp) {
    return res.status(400).json({ success: false })
  }
  res.status(200).json({ success: true, data: bootcamp });
};

// Delete Bootcamps
exports.deleteBootCamp = (req, res, next) => {
  res.send(`Delete bootcamp ${req.params.id}`);
};
