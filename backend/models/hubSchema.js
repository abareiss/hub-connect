const mongoose = require('mongoose')

// Every hub has all these attributes
const hubSchema = new mongoose.Schema({
    price: {type: String, required:true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zip: {type: String, required: true},
    availability_start: {type: String, required: true}, //Format: YYYY-MM-DD
    availability_end: {type: String, required: true}, //Format: YYYY-MM-DD
    image: {type: String, required:true}
})

// Hub is the class with all the hubSchema attributes.
const Hub = mongoose.model('Hub', hubSchema) // puts the schema into the hub basket

module.exports = Hub // in order to use the data in this schema anywhere else (like for importing in server.js)