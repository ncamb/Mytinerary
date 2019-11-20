const express=require('express');
const router=express.Router();
const Itinerary = require ('./models/itinerary.js');

router.get('/',async(req,res)=>{
    const Itineraries = await Itinerary.find();
    res.json(Itineraries);
});

router.get('/:name',async(req,res)=>{
     let cityRequested = req.params.name;
    const Itineraries = await Itinerary.find({  city: cityRequested });
    res.json(Itineraries);
});

router.post('/',async(req,res)=>{
    const { name, city,username,userphoto,rating,duration,price,hashtags}=req.body;
    const itinerary= new Itinerary({name, city,username,userphoto,rating,duration,price,hashtags});
    await itinerary.save();
    res.json('Itinerary saved');

})

module.exports = router;