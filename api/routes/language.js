const router = require("express").Router();
const LanguageModel = require("../models/languageModel");
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken');

//CREATE
router.post("/", verifyToken, async(req, res) => {
    const language = new LanguageModel(req.body);
    try {
        const savedLanguage = await language.save();
        res.status(200).json(savedLanguage);
    } catch (err) {
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id",verifyToken, async(req, res) => {
    try {
        const updatedLanguage = await LanguageModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedLanguage);
    } catch (err) {
        res.status(500).json(err);
    }
})

//DELETE
router.delete("/:id",verifyToken, async(req, res) => {
    try {
        await LanguageModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Language has been deleted!");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET LANGUAGE
router.get("/:id", verifyToken, async(req, res) => {
    try {
        const languages = await LanguageModel.find({userId: req.params.id});
        res.status(200).json(languages);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;