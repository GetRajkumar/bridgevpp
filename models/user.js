const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Define the MOdel
const userSchema = new Schema ({
    name: {type:String, lowercase: true},
    email: {type:String, unique: true, lowercase: true},
    password: String,
    role: String
});


// Create the modal Class
const ModelClass = mongoose.model('user', userSchema);


// Export the model

module.exports = ModelClass;