const express = require('express');
const Gig = require('../models/gig');
const router = express.Router();

router.get('/', function(req, res, next){
    console.log('running');
    let gigLimit = req.query.limit || 12;
    console.log(req.query.page);
    Gig.find({})
    .populate('creator', "-password -gigs -description")
    // .populate('creator')
    .skip((req.query.page - 1) * 12 || 0)
        .limit(12)
        .exec((err, posts) => {
            Gig.countDocuments().exec((error, count) => {
                if(error){
                    console.log(error);
                }else{
                    return res.json({
                        posts: posts,
                        totalCount: count
                    })
                }
            })
        })
        // .then(posts => {
        //     return res.json({
        //         posts: posts
        //     })
        // })
});

router.get('/:id', function(req, res, next){
    console.log('running')
    Gig.findById(req.params.id)
        .populate('reviews.author', "-password -gigs -description")
        
            .exec((err, post) => {
                return res.json({
                    post: post
                })   
            })
        // .then(post => {
        //     return res.json({
        //         post: post
        //     })
        // })
});


router.get('/search/:search', (req, res, next) => {
    console.log('running search');
    Gig.find({ $text: {$search: req.params.search}})
        .then(posts => {
            return res.json({
                posts: posts
            });
        });
});


router.get('/sortGame/:game', (req, res, next) => {
    console.log(req.params.game);
    Gig.find({game: req.params.game})
    // .populate('creator', "-password -gigs -description")
    .populate('creator')
    .skip((req.query.page - 1) * 12 || 0)
        .limit(12)
        .exec((err, posts) => {
            Gig.countDocuments().exec((error, count) => {
                if(error){
                    console.log(error);
                }else{
                    return res.json({
                        posts: posts,
                        totalCount: count
                    })
                }
            })
        })
});

router.get('/filters/sort', (req, res, next) => {
    console.log('ran');
    console.log(req.query);
})

module.exports = router;