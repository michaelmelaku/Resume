const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    userId: String,
    profileImg: String,
    firstName: String, 
    lastName: String,
    email: String,
    phoneNumber: String,
    city: String,
    country: String,
});

const PersonModel = mongoose.model('PersonModel', personSchema);

module.exports = PersonModel;