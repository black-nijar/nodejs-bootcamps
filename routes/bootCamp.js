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

// Include other resource routers
const courseRouter = require('./course');

const { protect } = require('../middleware/auth');

// Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootCampsInRadius);

router.route('/:id/photo').put(protect, bootcampPhotoUpload);

router
  .route('/')
  .get(advancedResult(Bootcamp, 'courses'), getBootCamps)
  .post(protect, createBootcamp);

router
  .route('/:id')
  .get(getBootCamp)
  .put(protect, updateBootCamp)
  .delete(protect, deleteBootCamp);

module.exports = router;
