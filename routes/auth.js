const express = require('express');

const {
  register,
  login,
  getMe,
  forgetPassword,
  resetPassword,
  updateDetails,
  logout
} = require('../controllers/auth');

const router = express.Router();
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/me', protect, getMe);
router.post('/forgotpassword', forgetPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.put('/updatedetails',protect ,updateDetails);

module.exports = router;
