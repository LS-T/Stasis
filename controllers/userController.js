const db = require('../models');

module.exports = {
    createNewUser: function ({body},res) {
        db.Users.create(body)
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => {
                res.status(400).json(err);
            })
        
    },
    loginUser: function (username, password, callback) {
        db.Users.findOne({username: username}).exec(function (error, user) {
            if(error) {
                callback({error: true})
            } else if (!user) {
                callback({error:true})
            } else {
                user.comparePassword(password, function(matchError, isMatch) {
                    if(matchError) {
                        callback({error: true})
                    } else if (!isMatch) {
                        callback({error:true})
                    } else {
                        callback ({success:true})
                    }
                })
            }
        })
    }
}