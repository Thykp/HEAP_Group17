const express = require('express');
const router = express.Router();
const userDetails = require("../model/userDetails");

router.get('/', async (req, res) => {

    try {
        const userName = req.query.userName;

        const retrieveDetails = await userAccount.getUserDetails(userName);
        if (!retrieveDetails) {
            return res.status(400).json({ "error": "Details not available!" });
        }

        res.status(200);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

router.post('/', async (req, res) => {

    try {
        const { userName, userAge, userHeight, userWeight, userActivity, userDiet, userGoal } = req.body;

        const changeDetails = await userDetails.updateUserDetails(userName, userAge, userHeight, userWeight, userActivity, userDiet, userGoal);
        if (!changeDetails) {
            return res.status(400).json({ "error": "Cannot change details for some reason!" });
        }

        res.status(200);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;