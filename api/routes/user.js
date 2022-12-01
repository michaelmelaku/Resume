const router = require("express").Router();
const UserModel = require("../models/userModel");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async(req, res) => {
    const {username, email, password, confirmPassword} = req.body;

    try {
        const existingUser = await UserModel.findOne({email});
        if(existingUser) return res.status(400).json({message: "User already exists."});
        if( password !== confirmPassword) return res.status(400).json({message: "Password don't match"});

        const hashedPassword = CryptoJS.AES.encrypt(password, process.env.PASS_SEC).toString();
        const user = await UserModel.create({username, email, password: hashedPassword});

        const accessToken = jwt.sign({
            id: user._id
        }, process.env.JWT_SEC, {expiresIn: "3d"});

        res.status(200).json({...user._doc, accessToken});
    } catch (err) {
        res.status(500).json(err.message);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email});
        
        !user && res.status(401).json("Wrong credential!");


        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json("Incorrect password!");
        
        const accessToken = jwt.sign({
            id:user._id
        }, process.env.JWT_SEC, {expiresIn: "3d"});

        const {password, ...others} = user._doc;
        res.status(200).json({...others, accessToken});
    } catch(err) {
        res.status(500).json(err);
    }
});


module.exports = router;