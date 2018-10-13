const express = require('express');
const Gig = require('../models/gig');
const User = require('../models/user');
const router = express.Router();

router.post('/', function(req, res, next){

    console.log(req.body);
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

    console.log(gig);

    gig.save((err, savedGig) => {
        if(err) console.log(err)
        return res.json(savedGig);
    });

});

module.exports = router;