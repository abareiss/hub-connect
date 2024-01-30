const mongoose = require('mongoose')

// Every user has all these attributes
const userSchema = new mongoose.Schema({ 
    email:{type: String, required: true},
    username:{type: String, required: true, unique: true},
    password: {type: String, required: true}
})

// User is the class with all the userSchema attributes.
const User = mongoose.model('User', userSchema) // puts the schema into the user basket

module.exports = User // in order to use the data in this schema anywhere else (like for importing in server.js)