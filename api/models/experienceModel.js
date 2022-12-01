const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema ({
    userId: String,
    jobTitle: String,
    city: String,
    startDate: Date,
    employeer: String,
    country: String,
    endDate: Date,
    stillWorking: Boolean,
})

const ExperienceModel = mongoose.model('ExperienceModel', experienceSchema);

module.exports = ExperienceModel;

