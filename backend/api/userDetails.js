const express = require('express');
const router = express.Router();
const userDetails = require("../model/userDetails");

router.get('/', async (req, res) => {

    try {

        // const userName = req.query.userName;
        const { username } = req.body;


        const retrieveDetails = await userDetails.getUserDetails(username);
        
        if (retrieveDetails.length <= 0) {
            return res.status(400).json({ "error": "Details not available!" });
        }

        res.status(200).json({'message': 'Details retrieved'});
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

router.post('/', async (req, res) => {

    try {
        const { uuid, username, age, height, weight, activity, diet, goal } = req.body;

        const changeDetails = await userDetails.updateUserDetails(uuid, username, age, height, weight, activity, diet, goal);
        if (changeDetails.length <= 0) {
            return res.status(400).json({ "error": "Cannot change details for some reason!" });
        }

        res.status(200).json({ "message": "Details updated!" });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;