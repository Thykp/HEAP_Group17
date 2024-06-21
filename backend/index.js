// To run: npm run devstart

const express = require('express');

const thisRouter = require('./routers/thisRouter');
const thatRouter = require('./routers/thatRouter');

const app = express();

app.use(express.json());

const BACKEND_PORT = 3000;

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