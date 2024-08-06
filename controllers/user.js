const userModel = require("../models/usermodel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


module.exports = {
    loginView: (req, res) => {
        res.render("login");
    },
    signUp: async (req, res) => {
        try {
            const user = await userModel.findOne({ email: req.body.email });
            if (!user) {
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(req.body.password, salt, async function (err, hash) {
                        const user = await userModel.create({
                            name: req.body.name,
                            email: req.body.email,
                            password: hash
                        })
                        const token = jwt.sign({ email: user.email }, "shhh");
                        res.cookie("token", token);
                        res.redirect("/");
                    })

                })
            }
            else{
                res.send("User already exists! Please Login");
            }
        }
        catch (err) {
            res.send(err.message);
        }

    },
    logIn: async (req, res) => {
            const user = await userModel.findOne({ email: req.body.email });
            console.log(req.body.email);
            console.log(user);
            bcrypt.compare(req.body.password, user.password, function (err, result) {
               
                if (result) {
                    const token = jwt.sign({ email: user.email, id:user._id }, "shhh");
                    res.cookie("token", token);
                    res.redirect("/");
                }
                else {
                    res.send("Email or Password Incorrect");
                }
            })
    },
    logOut: (req, res) => {
        res.cookie("token", "");
        res.send("user logout successfully");
    }
}





