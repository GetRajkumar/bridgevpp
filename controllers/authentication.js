const jwt = require('jwt-simple');
const User = require('../models/user');
const Vendor = require('../models/vendor');
const config = require('../config');
const mongo = require('mongodb');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, name:user.name, role: user.role, iat: timestamp }, config.secret);
}

exports.signin = function(req, res, next) {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user), message:'200'});
}

exports.signup = function(req, res, next) {
  const name =  req.body.name; 
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role;
  const accesskey = req.body.accesskey;

  if (!email || !password || !name || !role || !accesskey) {
    return res.status(422).send({ error: 'You must provide  All data Values'});
  }
    if(accesskey != config.accesskey){
        return res.status(422).send({ error: 'To Signup Please get proper AccessKey from Admin'});
    }
  // See if a user with the given email exists
  User.findOne({ email: email }, function(err, existingUser) {
    if (err) { return next(err); }

    // If a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // If a user with email does NOT exist, create and save user record
    const user = new User({
      name: name,
      email: email,
      password: password,
      role:role,
      accesskey
    });

    user.save(function(err) {
      if (err) { return next(err); }

      // Repond to request indicating the user was created
      res.json({ token: tokenForUser(user)});
    });
  });
}
exports.addvendor = function(req, res, next) {
   const name =  req.body.name; 
   const vendorid =  req.body.vendorid; 
   const email =  req.body.email; 
   const product =  req.body.product; 
   const phone =  req.body.phone; 
   const address =  req.body.address; 
   const gst = req.body.gst;
   const pannumber =  req.body.pannumber; 
  if(!name || !vendorid || !email || !product || !phone || !address || !gst || !pannumber) {
     return res.send({ messagecode: '1001' });// Must provide all data
  }
   Vendor.findOne({ name: name }, function(err, existingUser) {
     if (err) { return next(err); }
     
     if (existingUser) {
      return res.send({ messagecode: '1002' });// Vendor in Use
    }
     const vendor = new Vendor({
      name: name,
      vendorid: vendorid,
      email: email,
      product:product,
      phone: phone,
      address: address,
      gst:gst,
      pannumber:pannumber
    });
     vendor.save(function(err) {
      if (err) { return next(err); }

      // Repond to request indicating the user was created
      res.json({ messagecode: '1000'});//Vendor successfully added on vendors bucket!!!
    });
   });
}

exports.Fetchvendor = function(req, res, next) {
   Vendor.find({}, function(err, fetchData){
     if (err) { return next(err); }
     if(fetchData.length != '0'){
        res.json(fetchData);
     }
   });

}
