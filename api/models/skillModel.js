const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    userId: String,
    skill: String,
})

const SkillModel = mongoose.model('SkillModel', skillSchema);

module.exports = SkillModel;