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

        res.status(200).json({'message': account});
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

router.post('/', async (req, res) => {

    try {
        const { username, password, email } = req.body;
        
        const insertAccount = await userAccount.insertUserAccount(username, password, email);
                
        if (insertAccount.length <= 0) {
            return res.status(400).json({ "error": "Cannot make new account!" });
        }

        res.status(200).json({ "message": "Account created!" });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

router.post('/update', async (req, res) => {

    try {
        const { uuid, username, password, email } = req.body;
        
        const updateAccount = await userAccount.updateUserAccount(uuid, username, password, email);
                
        if (updateAccount === 'fail') {
            return res.status(400).json({ "error": "Cannot update account!" });
        }

        res.status(200).json({ "message": "Account updated!" });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;