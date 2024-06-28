const express = require('express');
const router = express.Router();
const userAccount = require("../model/userAccount");

router.get('/', async (req, res) => {

    try {

        const { username, password } = req.body;
        const account = await userAccount.getUserAccount(username, password);

        if (account.length <= 0) {
            return res.status(400).json({ "error": "Account does not exist!" });
        }

        res.status(200).json({'message': 'Account retrieved'});
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;