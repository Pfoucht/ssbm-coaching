const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    email: {type: String, unique: true, required: true},
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    description: {type: String},
    twitter: {type: String},
    twitch: {type: String},
    gigs: [{type: mongoose.Schema.Types.ObjectId, ref: 'Gig'}],
    profilePicture: {type: String}
});


userSchema.methods.setPassword = function(password){
    var hash = bcrypt.hashSync(password);
    this.password = hash;
};

userSchema.methods.validatePassword = function(password){
    console.log('in modELELLE');
    console.log(password);
    console.log("BEFORE THE RES");
    console.log(this);
    const res = bcrypt.compareSync(password, this.password);

    console.log("AM I GONNA GET A RES?")
    console.log("Res is " + res);
    return res;

    // bcrypt.compare(password, this.password, function(err, res){
    //     console.log('in bcrypt');
    //     if(err){
    //         console.log(err, 'THIS IS ERR')
    //     }
    //     return res;
    // });
};

userSchema.methods.generateJWT = function(){
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secretkey');
};


module.exports = mongoose.model('User', userSchema);