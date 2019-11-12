const express=require('express');
const router=express.Router();
const Itinerary = require ('./models/itinerary.js');

router.get('/',async(req,res)=>{
    const Itineraries = await Itinerary.find();
    res.json(Itineraries);
});

router.get('/:name',async(req,res)=>{
     let cityRequested = req.params.name;
    const Itineraries = await Itinerary.find({ hashtags: cityRequested });
    res.json(Itineraries);
});

module.exports = router;