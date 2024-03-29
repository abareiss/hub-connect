const mongoose = require('mongoose')

// Every user has all these attributes
const userSchema = new mongoose.Schema({ 
    //    firstname, lastname, dob, universityname, email, password
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    dob: {type: String, required: true}, //Format: YYYY-MM-DD
    universityname: {type: String, required: true},
    email:{type: String, required: true},
    personalemail:{type: String, required: true},
    //username:{type: String, required: true, unique: true},
    password: {type: String, required: true},
    gender: {type: String, required: true}, // what about when this information is given by selection (like figma shows)??
    dormpreference: {type: String, required: true}, // what about when this information is given by selection (like figma shows)??
    
    aboutme: {type: String, required: false},
    
    preferences: [
        {preferences_1: {type: String, required: false}},
        {preferences_2: {type: String, required: false}},
        {preferences_3: {type: String, required: false}},
        {preferences_4: {type: String, required: false}}, 
    ],

})

// User is the class with all the userSchema attributes.
const User = mongoose.model('User', userSchema) // puts the schema into the user basket

module.exports = User // in order to use the data in this schema anywhere else (like for importing in server.js)