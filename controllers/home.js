const jwt = require("jsonwebtoken");
const userModel = require("../models/usermodel");



module.exports = {
    homeView: (req, res) => {
        res.render("home");
    },
    cartView: (req, res) => {
        res.render("cart")
    },
    adminView: (req, res) => {
        res.render("admin");
    },
    uploadView: (req, res) => {
        res.render("AdminUpload");
    },
    accountView: async (req, res) => {
        try {
            const token = req.cookies.token
            console.log(token);
            if(token){
                const decoded = jwt.verify(req.cookies.token, "shhh");
                const user = await userModel.findOne({ email: decoded.email });
                console.log(user);
                res.render("account", { user: user });
            }
            else{
                res.send("Please Login");   
            } 
        }
        catch(err){
            res.send(err.message);
        }
    }



}


