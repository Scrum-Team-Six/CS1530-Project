/** 
 * Manages user registration in a MongoDB database
 * 
 * Features:
 *  - Establishes connection to the MongoDB database using Mongoose.
 *  - Defines Mongoose Schemas for expected user input data.
 *  - Creates and exports a mongoose model (collection) to be used elsewhere in the program.
 * 
 * Dependencies:
 *  - Mongoose
 *  - MongoDB
 * 
 * Author: Henry Uz & Mark Kraus
  */

//-------------------------------------------------------------------
//            Configuration
//-------------------------------------------------------------------

// Import the mongoose library 
const mongoose = require("mongoose");

// URI for local testing
const connect = mongoose.connect("mongodb+srv://heu5:AgDsYabct7p56ksI@cluster0.o58ssex.mongodb.net/");

connect.then(() => {
  // Connection was successful
  console.log("it worked");
})
.catch(() =>{
  // Connection was unsuccessful
  console.log("it didnt worked");
})

//-------------------------------------------------------------------
//            Schemas
//-------------------------------------------------------------------

// Blueprint for expected user input data to be pulled from the registration page
const RegistrationSchema = new mongoose.Schema({
  firstname: {
    type: String, 
    required: true
  },

  lastname: {
    type: String, 
    required: true
  },

  email: {
    type: String, 
    required: true
  },

  username: {
    type: String, 
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const LoginSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  }
})

//-------------------------------------------------------------------
//            Mongoose Model
//-------------------------------------------------------------------

// Create a Mongoose model to interact with MongoDB database
const collection = new mongoose.model("registeredusers", RegistrationSchema);

// Allows the collection to be accessible in other parts of the program
module.exports = collection;