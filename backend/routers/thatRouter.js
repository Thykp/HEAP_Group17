const express = require("express");
const { thatRoot, thatHello, thatByeBye } = require("../controllers/thatController");


const thatRouter = express.Router();

thatRouter.get('/', thatRoot);

thatRouter.get('/hello', thatHello);

thatRouter.get('/bye', thatByeBye);


module.exports = thatRouter;