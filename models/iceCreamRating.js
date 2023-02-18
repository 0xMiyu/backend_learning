const mongoose = require('mongoose');

const iceCreamRatingSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('IceCreamRating', iceCreamRatingSchema);