const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gigSchema = new Schema({
    title: {type: String},
    description: {type: String, required: true},
    pricing: {required: true, default: 'Free', type: String},
    rank: {type: String},
    game: {type: String},
    characters: [],
    coverPhoto: {type: String}
});

module.exports = mongoose.model('Gig', gigSchema);