const router = require("express").Router();
const SkillModel = require("../models/skillModel");
const {verifyToken} = require('./verifyToken');

//CREATE
router.post("/",  verifyToken, async(req, res) => {
    const skill = new SkillModel(req.body);
    try {
        const savedSkill = await skill.save();
        res.status(200).json(savedSkill);
    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id", verifyToken, async(req, res) => {
    
        try {
            const updatedSkill = await SkillModel.findByIdAndUpdate(req.params.id,
                {$set: req.body}, {new: true});
            res.status(200).json(updatedSkill);
        } catch (err) {
            res.status(500).json(err);
        }
});

//DELETE
router.delete("/:id",verifyToken,  async(req, res)=> {
    try {
        await SkillModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Skill has been deleted");
    } catch (err) {
        res.status(500).json(err);
    }
})

//GET SKILLS
router.get("/:id",  verifyToken, async(req, res) => {
    
    try {
        const skills = await SkillModel.find({userId: req.params.id});
        res.status(200).json(skills);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;