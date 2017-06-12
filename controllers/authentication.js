const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

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
      res.json({ token: tokenForUser(user), message:'200'});
    });
  });
}