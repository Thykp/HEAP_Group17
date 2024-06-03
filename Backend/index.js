// To run: npm run devstart

const express = require('express');

const thisRouter = require('./router/thisRouter');
const thatRouter = require('./router/thatRouter');

const app = express();

app.use(express.json());

const PORT = 3000;

// Health check endpoint
app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Server is up and running"
    });
});

app.use('/this', thisRouter);
app.use('/that', thatRouter);

// Start the application
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
