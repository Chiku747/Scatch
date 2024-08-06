const express = require("express");
const ejs = require("ejs");
const router = express.Router();
const view = require("../controllers/home");




router.get("/", view.homeView);



module.exports = router;