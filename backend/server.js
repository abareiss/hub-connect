// help your server
const express = require('express')
// make a schema of the tables in database and connect it to mongoDB
const mongoose = require('mongoose')
//minimize errors when connecting to database/api 
const cors = require('cors')
//parse data into json
const bodyParser = require('body-parser')
//will hash our password/encryption
const bcrypt = require('bcrypt')
// token that follows user when they get created/sign in. Follows them around. Removed/deleted when they sign-out
const jwt = require('jsonwebtoken')
const User = require('./models/userSchema')
const Hub = require('./models/hubSchema')
const {min_value, max_value} = require('./helper.js');

const SECRET_KEY = 'secretkey' 

//connect to express app -> to listen to port inside 3001
const app = express()

// Ranking algorithm function



//connect to MongoDB
const dbURI = 'mongodb+srv://rithwikgarapati:thoMfKuY7OsoyUdJ@cluster0.h3sqdyy.mongodb.net/UsersDB?retryWrites=true&w=majority'
mongoose.connect(dbURI, {
   //these help us connect to mongo efficiently
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(3001, () => {
        console.log("Server is connected to port 3001 and connected to MongoDB")
    })
})
.catch((error)=>{
    console.log('Unable to connect to Server and/or MongoDB')
})

//middleware
app.use(bodyParser.json())
app.use(cors())


//routes
// CRUD requests (Create and Read for this)

// Create - POST REQUEST
// READ - GET REQUEST

//USER REGISTRATION
// POST REGISTER
// we are using express app to post data into the /register route
app.post('/register', async(req, res) => {
    try{
        const{firstname, lastname, dob, universityname, email, personalemail, password, gender, dormpreference} = req.body
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({firstname, lastname, dob, universityname, email, personalemail, password:hashedPassword, gender, dormpreference})
        await newUser.save()
        res.status(201).json({message: 'User created successfully'})
    } catch(error) {
        res.status(500).json({error: 'Error signing up'})
    }
})

// POST REQUEST
app.post('/listhub', async(req, res) => {
    try{
        const{price, city, state, zip, availability_start, availability_end, image, likes, rating, views, name} = req.body
        const newHub = new Hub({price, city, state, zip, availability_start, availability_end, image, likes, rating, views, name})
        await newHub.save()
        res.status(201).json({message: 'Hub listing created successfully'})
    } catch(error) {
        res.status(500).json({error: 'Error listing hub'})
    }
})

// GET REGISTERED USERS
app.get('/register', async (req,res) =>{
    try{
        const users = await User.find()
        res.status(201).json(users)
    } catch (error){
        res.status(500).json({error: 'Unable to get users'})
    }
})

//GET LOGIN 
app.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        // retrieving the user data from MONGODB
        const user = await User.findOne({email})
        if (!user){
            return res.status(401).json({error: 'Invalid credentials'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({error : 'Invalid credentials'})
        }
        const token = jwt.sign({userId: user._id}, SECRET_KEY, {expiresIn: '1hr'})
        res.json({message: 'Login successful'})
    }catch (error){
        res.status(500).json({error: 'Error logging in'})
    }
})



// GET USER 
app.get('/listhub', async (req,res) =>{
    try{

        let query = { city : "Irvine"}
        const hubs = await Hub.find(query) // returns a list of objects. 
        // hubs = hubs.toArray(function(err, result){
        //     if (err) throw err;
        // })

        // Rating: max - 5, min - 0; Likes: min - 0
        
        min_price = min_value(hubs, "price")
        max_price = max_value(hubs, "price")
        min_likes = 0
        max_likes = max_value(hubs, "likes")
        min_views = 0
        max_views = max_value(hubs, "views")
        min_rating = 0
        max_rating = max_value(hubs, "rating")

        
        res.status(201).json(hubs)
    } catch (error){
        res.status(500).json({error: 'Unable to get listed hubs'})
    }
})

