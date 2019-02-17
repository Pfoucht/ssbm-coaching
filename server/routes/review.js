const express = require('express');
const Gig = require('../models/gig');
const router = express.Router();
const jwt = require('jsonwebtoken');


router.post('/:id/create', (req, res, next) => {
    console.log('in review')
    const token = req.query.token;
    let userId = null;

    jwt.verify(token, 'secretkey', function(err, decoded) {
        if(err){
            console.log(err);
            console.log('error');
            return;
        }
        userId = decoded.userId;
    })

    Gig.findById(req.params.id)
        .then(gig => {
            console.log(gig.reviews);
            let reviewObj = {
                rating : req.body.starRating,
                content: req.body.review,
                author: userId
            }
            gig.reviews.push(reviewObj);
            gig.save()
                .then(() => {
                    console.log('review complete');
                    return res.json({
                        res: 'ALL DONE HERE'
                    })
                })
        })
        .catch(err => {
            console.log('error publishing review')
        });
})


module.exports = router;