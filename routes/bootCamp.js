const express = require("express");
const router = express.Router();

const {
  getBootCamps,
  getBootCamp,
  createBootcamp,
  updateBootCamp,
  deleteBootCamp
} = require("../controllers/bootCamp");

router
  .route("/")
  .get(getBootCamps)
  .post(createBootcamp);

router
  .route("/:id")
  .get(getBootCamp)
  .put(updateBootCamp)
  .delete(deleteBootCamp);

module.exports = router;