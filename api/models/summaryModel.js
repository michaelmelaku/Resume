const mongoose = require('mongoose');

const summarySchema = mongoose.Schema ({
    userId: String,
    professionalTitle: String,
    professionalSummary: String
});

const SummaryModel = mongoose.model('SummaryModel', summarySchema);

module.exports = SummaryModel;