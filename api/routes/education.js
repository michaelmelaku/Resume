const router = require('express').Router();
const EducationModel = require("../models/educationModel");
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken');
//CREATE
router.post("/", verifyToken, async(req, res)=> {
    const education = new EducationModel(req.body);
    try {
        const savedEducation = await education.save();
        res.status(200).json(savedEducation);
    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id", verifyToken, async(req, res) => {
    try {
        const updatedEducation = await EducationModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedEducation);
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE 
router.delete("/:id", verifyToken, async(req, res) => {
    try {
        await EducationModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Education has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET EDUCATION
router.get("/:id",  async(req, res) => {
    try {
        const educatons = await EducationModel.find({userId: req.params.id});
        res.status(200).json(educatons)
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;

//Thanks to tell me to get back to coding.



