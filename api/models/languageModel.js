const mongoose = require('mongoose');

const languageSchema = mongoose.Schema({
    userId: String,
    language: String,
    level: String,
})

const LanguageModel = mongoose.model('LanguageModel', languageSchema);

module.exports = LanguageModel;