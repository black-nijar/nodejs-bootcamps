const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/asyncHandler');
const geocoder = require('../utils/geocoder');
const Course = require('../models/Course');
const Bootcamp = require('../models/Bootcamp');

// Get Courses
exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.bootcampId) {
    query = Course.find({ bootcamp: req.params.bootcampId });
  } else {
    query = Course.find().populate({
      path: 'bootcamp',
      select: 'name description'
    });
  }
  const courses = await query;
  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses
  });
});

// Get single course
exports.getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate({
    path: 'bootcamp',
    select: 'name description'
  });
  if (!course) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    success: true,
    data: course
  });
});

// Add Course
exports.addCourse = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampId;

  const bootcamp = await Bootcamp.findById(req.params.bootcampId);
  
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.bootcampId}`, 404)
    );
  };

  const course = await Course.create(req.body);

  res.status(200).json({
    success: true,
    data: course
  });
});

// Update Course
exports.updateCourse = asyncHandler(async (req, res, next) => {

  let course = await Course.findById(req.params.id);

  if (!course) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  };
  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })

  res.status(200).json({
    success: true,
    data: course
  });
});

// Delete Course
exports.deleteCourse = asyncHandler(async (req, res, next) => {

  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  };
 await course.remove()

  res.status(200).json({
    success: true,
    data: course
  });
});