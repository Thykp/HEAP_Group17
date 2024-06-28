const express = require('express');
const router = express.Router();
const userAccount = require("../model/userAccount");

router.get('/', async (req, res) => {

    try {
        const { userName, userPassword } = req.body;

        const login = await userAccount.getUserAccount(userName, userPassword);
        if (!login) {
            return res.status(400).json({ "error": "Account already something!" });
        }

        res.status(200);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;