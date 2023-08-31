const express = require("express");
const rootRouter = express.Router();

const user = require("./user");

rootRouter.use('/user', user);

module.exports = rootRouter;