const express = require('express');
const router = express.Router();

const {
  getBootCamps,
  getBootCamp,
  createBootcamp,
  updateBootCamp,
  deleteBootCamp,
  getBootCampsInRadius
} = require('../controllers/bootCamp');

router.route('/radius/:zipcode/:distance').get(getBootCampsInRadius);

router
  .route('/')
  .get(getBootCamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootCamp)
  .put(updateBootCamp)
  .delete(deleteBootCamp);

module.exports = router;
