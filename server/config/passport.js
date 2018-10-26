const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;


const User = require('../models/user');

const secret = 'secretkey';



passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    }, async (username, password, done) => {
        try {
            console.log(username);
            const userDocument = await User.findOne({ username: username }).exec();
            const passwordMatch = await userDocument.validatePassword(password);
            
            console.log(userDocument)
            console.log(passwordMatch)
            if(passwordMatch){
                console.log('password match')
                return done(null, userDocument);
            }else {
                console.log('password doidnt match')
                return done('Incorrect username or password');

            }
        } catch(error){
            console.log('catch');
            console.log(error);
            done(error);
        }
    }
    )
);

passport.use(new JWTStrategy({
    jwtFromRequest: req => req.cookies.jwt,
    secretOrKey: secret
    },
    (jwtPayload, done) => {
        if(jwtPayload.expires > Date.now()){
            return done('JWT expired');
        }
        return done(null, jwtPayload);
    }
));
