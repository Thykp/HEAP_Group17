// template
const express = require('express');
const bodyParser = require('body-parser');
const userAccount = require('./userAccount');
const sequelize = require('./sequelize');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/profile', async (req, res) => {
    try {
        const chatID = req.query.chatID;
        const profiles = await userAccount.getProfileInformation(chatID);
        res.status(200).json(profiles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

sequelize.sync({ alter: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});
