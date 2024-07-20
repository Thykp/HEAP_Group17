const express = require('express');
const router = express.Router();
const userDetails = require("../model/userDetails");

router.get('/', async (req, res) => {

    try {

        // const userName = req.query.userName;
        const { uuid } = req.body;


        const retrieveDetails = await userDetails.getUserDetails(uuid);
        
        if (retrieveDetails.length <= 0) {
            return res.status(400).json({ "error": "Details not available!" });
        }
        
        res.status(200).json({'message': retrieveDetails});
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

router.post('/insert', async (req, res) => {

    try {
        console.log(req.body);
        const { uuid, height, weight, years_of_experience, interest, free_days, target_weight } = req.body;

        const insertDetails = await userDetails.insertUserDetails(uuid, height, weight, years_of_experience, interest, free_days, target_weight);

        res.status(200).json({ "message": "Details inserted!" });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

router.post('/update', async (req, res) => {

    try {
        const { uuid, height, weight, years_of_experience, interest, free_days, target_weight } = req.body;
        
        const changeDetails = await userDetails.updateUserDetails(uuid, height, weight, years_of_experience, interest, free_days, target_weight);
                
        if (changeDetails === 'fail' || changeDetails.length <= 0) {
            return res.status(400).json({ "error": "Cannot change details for some reason!" });
        }

        res.status(200).json({ "message": "Details updated!" });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;