const router = require("express").Router();
const SummaryModel = require("../models/summaryModel");
const {verifyToken, verifyTokenAndAuthorization} = require('./verifyToken');

router.post("/",verifyToken, async(req, res) => {
    const summary = new SummaryModel(req.body);
    try {
        const savedSummary = await summary.save();
        res.status(200).json(savedSummary);
    } catch (err) {
        res.statusCode(500).json(err);
    }
});

router.delete("/:id",verifyTokenAndAuthorization,  async(req, res) => {
    try {
        await SummaryModel.findByIdAndDelete(req.params.id);
        res.status(200).json("Summary has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try {
        const updatedSummary = await SummaryModel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updatedSummary);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id",  async(req, res) => {
    try {
        const summary = await SummaryModel.find({userId: req.params.id});
        res.status(200).json(summary);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;