const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');


//Define the MOdel
const userSchema = new Schema ({
    name: {type:String, lowercase: true},
    email: {type:String, unique: true, lowercase: true},
    password: String,
    role: String
});
const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);


// Create the modal Class
const ModelClass = mongoose.model('user', userSchema);


// Export the model

module.exports = ModelClass;