const express = require("express");
const { thisRoot, thisHello, thisByeBye } = require("../controller/thisController");


const thisRouter = express.Router();

thisRouter.get('/', thisRoot);

thisRouter.get('/hello', thisHello);

thisRouter.get('/bye', thisByeBye);


module.exports = thisRouter;