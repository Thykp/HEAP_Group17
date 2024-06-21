const express = require('express');
const userAccount = require('./userAccount');
const userDetails = require('./userDetails');

const router = express.Router();

router.use('/userAccount', userAccount);
router.use('/userDetails', userDetails);

module.exports = router;