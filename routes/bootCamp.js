const express = require('express');
const router = express.Router();

const {
  getBootCamps,
  getBootCamp,
  createBootcamp,
  updateBootCamp,
  deleteBootCamp,
  getBootCampsInRadius,
  bootcampPhotoUpload
} = require('../controllers/bootCamp');

const Bootcamp = require('../models/Bootcamp');
const advancedResult = require('../middleware/advancedResult');
const { protect, authorize } = require('../middleware/auth');

// Include other resource routers
const courseRouter = require('./course');
const reviewRouter = require('./reviews');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/reviews', reviewRouter);

router.route('/radius/:zipcode/:distance').get(getBootCampsInRadius);

router
  .route('/:id/photo')
  .put(protect, authorize('publisher', 'admin'), bootcampPhotoUpload);

router
  .route('/')
  .get(advancedResult(Bootcamp, 'courses'), getBootCamps)
  .post(protect, createBootcamp);

router
  .route('/:id')
  .get(getBootCamp)
  .put(protect, authorize('publisher', 'admin'), updateBootCamp)
  .delete(protect, authorize('publisher', 'admin'), deleteBootCamp);

module.exports = router;
