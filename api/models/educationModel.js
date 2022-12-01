const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
    userId: String,
    schoolName: String,
    degree: String,
    field: String,
    city: String,
    country: String,
    startDate: String,
    endDate: String,
    stillLearning: Boolean,
});

const EducationModel = mongoose.model('EducationModel', educationSchema);

module.exports = EducationModel;


