const express = require('express');
const router = express.Router();
const viewController = require("../controllers/home");
const loginController = require("../controllers/user");
const signUpController = require("../controllers/user");



router.get("/cart", viewController.cartView);
router.get("/account", viewController.accountView);
router.get("/admin", viewController.adminView);
router.get("/login", loginController.loginView);
router.post("/login", loginController.logIn);
router.post("/signup", signUpController.signUp );
router.get("/logout", loginController.logOut);



module.exports = router;