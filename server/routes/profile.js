const express = require('express');
const Gig = require('../models/gig');
const User = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');


router.get('/:username', (req, res, next) => {
    let token = req.query.token;

    let authUsername;

    jwt.verify(token, 'secretkey', (err, decoded) => {
        if(err){
            return;
        }else{
            authUsername = decoded.username;
        }
    });

    User.findOne({username: req.params.username})
        .populate('gigs')
        .exec((err, theUser) => {
            if(err){
                console.log(err);
                return;
            }
            let isOwnProfile = false;
            console.log(authUsername);
            console.log(token);
            console.log(req.params.username);
            if(authUsername === req.params.username){
                isOwnProfile = true;
            }
            return res.status(200).json({
                username: theUser.username,
                gigs: theUser.gigs,
                profilePicture: theUser.profilePicture,
                isOwnProfile: isOwnProfile
            })
        })
});

router.post('/img', (req, res, next) => {

    if(!req.body.fileURL){
        return res.status(400).json({
            error: 'No image submitted'
        });
    }

    let token = req.query.token;
    
    jwt.verify(token, 'secretkey', (err, decoded) => {
        if(err) console.log(err);

        let username = decoded.username;

        console.log(req.body.fileURL);
        User.findOne({username: username})
            .then(theUser => {
                theUser.profilePicture = req.body.fileURL;
                theUser.save()
                    .then(res => {
                        return res.status(200).json({
                            profileImg: res.profilePicture
                        })
                    })
                    .catch(error => {

                    })
            })
            .catch(error => {

            })
    });

});

module.exports = router;