const router = require('express').Router();
const ExperienceModel = require("../models/experienceModel");
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken');
//CREATE
router.post("/", verifyToken, async(req, res) => {
    const experience = new ExperienceModel(req.body);

    try {
        const savedExperience = await experience.save();
        res.status(200).json(savedExperience);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//UPDATE 
router.put("/:id", verifyToken, async(req, res) => {
    try {
        const updatedExperience = await ExperienceModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedExperience);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//DELETE 
router.delete("/:id", verifyToken, async(req, res) => {
    try {
        await ExperienceModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Experience has been deleted!");
    }
    catch(err){
        res.status(500).json(err);
    }
});

//GET EXPERIENCE
router.get("/:id", verifyToken, async(req, res) => {
    try {
        const experiences = await ExperienceModel.find({userId: req.params.id});
        res.status(200).json(experiences);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;

