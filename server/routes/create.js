const express = require('express');
const Gig = require('../models/gig');
const User = require('../models/user');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/', function(req, res, next){

    const token = req.query.token;
    let username = null;
    console.log(token);
    jwt.verify(token, 'secretkey', function(err, decoded) {
        if(err){
            console.log(err);
            console.log('error');
            return;
        }
        console.log(decoded);
        username = decoded.username;
      });


    console.log('ran create post');
    let gig = new Gig({
        game: req.body.game,
        pricing: req.body.pricing,
        title: req.body.title,
        rank: req.body.rank,
        characters: req.body.characters,
        description: req.body.description,
        coverPhoto: req.body.coverPhoto
    });


    gig.save((err, savedGig) => {
        if(err) console.log(err)

        User.findOne({username: username})
            .then(theUser => {
                console.log(theUser);
                theUser.gigs.push(savedGig._id);
                theUser.save((err, savedUser) => {
                        console.log(savedUser);
                        return res.status(200).json(savedGig + savedUser);
                })
            })
            .catch(error => {
                console.log(error);
            })
    });

});

module.exports = router;