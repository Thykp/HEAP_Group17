const express = require('express');
const userAccount = require('./userAccount');
const userDetails = require('./userDetails');
const workouts = require('./workout');

const router = express.Router();

router.use('/userAccount', userAccount);
router.use('/userDetails', userDetails);
router.use('/workout', workouts);

module.exports = router;