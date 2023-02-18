const express = require('express');
const router  = express.Router();
const IceCreamRating = require('../models/iceCreamRating');

router.get('/', async(req, res) => {
    try {
        const iceCreams = await IceCreamRating.find();
        res.status(200).json(iceCreams);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

router.post('/', async(req, res) => {
    const rating = new IceCreamRating({
        name: req.body.name,
        rating: req.body.rating
    })
    try {
        const newRating = await rating.save();
        res.status(201).json(newRating);
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})


module.exports = router;