const express = require("express");
const { scrapper } = require("../controller/scrapper");

const Router = express.Router();

Router.route("/scrapper").get(scrapper);

module.exports = Router;