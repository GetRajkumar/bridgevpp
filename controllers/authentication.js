const User = require ('../models/user');
exports.signup = function (req, res, next) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
// See if a user with the given email exists
        if(!email || !password || !role || !name){
            return res.send({error: 'some value not entered'});
        }

User.findOne({email: email }, function(err, existingUser) {

        if(err){return next(err);}
    
        // if a user with email does exist , return an error
      
        if(existingUser){
            return res.status(422).send({error: 'Email is in use'});
        }
        
        const user = new User ({
            name: name,
            email: email,
            password: password,
            role: role
        });

        user.save(function(err){
            if(err){
                return next(err);
            }
             res.json({success:'true'});
        });
       

// if user with email does NOT exist , Create and save user record         

});
}