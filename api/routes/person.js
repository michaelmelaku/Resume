const router = require('express').Router();
const PersonModel = require('../models/personModel');
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken');

//CREATE PERSON
router.post('/', verifyToken, async(req, res) => {
    const newPerson = new PersonModel(req.body);

    try {
        const savedPerson = await newPerson.save();
        res.status(200).json(savedPerson);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//UPDATE PERSON
router.put("/:id", verifyToken, async(req, res) => {
    try {
        const updatedPerson = await PersonModel.findByIdAndUpdate(req.params.id, 
            {$set: req.body}, {new: true});
        res.status(200).json(updatedPerson);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//DELETE PERSON

router.delete("/:id", verifyToken, async(req, res) => {
    try {
        await PersonModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Contacts has been deleted.");
    }
    catch(err){
        res.status(500).json(err);
    }
});

//GET PERSON
router.get("/:id", verifyToken, async(req, res) => {
    try {
        const persons = await PersonModel.find({userId: req.params.id});
        res.status(200).json(persons);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;
