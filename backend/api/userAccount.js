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

router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await userAccount.getUserAccount(email);
      if (!user) {
        return res.status(400).json({ error: "User not found!" });
      }
  
      const isPasswordValid = await userAccount.verifyPassword(email, password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid password!" });
      }
  
      res.status(200).json({ message: "Login successful!", user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.post('/register', async (req, res) => {

    try {
        const { email, first_name, last_name, password } = req.body;
        
        const insertAccount = await userAccount.insertUserAccount(email, first_name, last_name, password);
                
        if (!insertAccount) {
            return res.status(409).json({ "error": "Account already exists!" });
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