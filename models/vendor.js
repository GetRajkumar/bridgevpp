const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const vendorSchema = new Schema({
  name: { type: String, lowercase: true },
  vendorid: { type: String},  
  email: { type: String, unique: true, lowercase: true },
  product: { type: String },
  phone: { type: Number},
  address: String,
  pannumber: String
});


// Create the model class
const ModelVendor = mongoose.model('vendor', vendorSchema);

// Export the model
module.exports = ModelVendor;