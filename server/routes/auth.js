const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../config/auth');
const Users = require('../models/user');
const jwt = require('jsonwebtoken');


router.post('/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);

    try {
        const user = new Users();
        user.username = username;
        user.email = req.body.email;
        user.setPassword(password);

        await user.save();

        res.status(200).send({ username });

    } catch(error) {
        console.log(error);
        res.status(400).send({
            error: 'Req body should have username, password'
        });
    }
});


router.post('/login', (req, res) => {

    passport.authenticate('local', { session: false}, (error, user) => {
        if(error || !user){
            res.status(400).json({ error });
            console.log('here');
        }

        console.log(user);

        let today = new Date();
        let expire = new Date();

        expire.setTime(today.getTime() + 3600000*24*14);

        const payload = {
            username: user.username,
            expiresIn: expire,
            userId: user._id
        }

        req.login(payload, { session: false }, (error) => {
            if(error){
                res.status(400).send({ error });
            }
            const token = jwt.sign(JSON.stringify(payload), 'secretkey');
            // res.cookie('jwt', jwt, { httpOnly : true, secure: true});
            // res.status(200).send({ payload });
            res.status(200).json({
                token: token,
                username: payload.username,
                expiresIn: payload.expiresIn,
                profilePicture: user.profilePicture
            })
        });
    },
)(req, res);
});


module.exports = router;