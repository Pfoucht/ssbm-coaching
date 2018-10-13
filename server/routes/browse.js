const express = require('express');
const Gig = require('../models/gig');
const router = express.Router();

router.get('/', function(req, res, next){
    console.log('running')
    Gig.find({})
        .then(posts => {
            return res.json({
                posts: posts
            })
        })
});

router.get('/:id', function(req, res, next){
    console.log('running')
    Gig.findById(req.params.id)
        .then(post => {
            return res.json({
                post: post
            })
        })
});

module.exports = router;