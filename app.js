const express = require("express");
const app = express();
const homeRoute = require("./routes/home")
const loginRoute = require("./routes/user");
const path = require("path");
const ejs = require("ejs");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");



app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use("/", homeRoute );
app.use("/", loginRoute);

app.listen(3000);
