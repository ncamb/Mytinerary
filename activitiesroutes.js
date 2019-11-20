const express=require('express');
const router=express.Router();
const Activity = require ('./models/activity.js');

router.get('/',async(req,res)=>{
    const Activities = await Activity.find();
    res.json(Activities);
});

router.get('/:name',async(req,res)=>{
     let actRequested = req.params.name;
    const Activities = await Activity.find({  title: actRequested });
    res.json(Activities);
});

router.post('/',async(req,res)=>{
    const { name, city,username,userphoto,rating,duration,price,hashtags}=req.body;
    const activity= new Activity({name, city,username,userphoto,rating,duration,price,hashtags});
    await activity.save();
    res.json('Activity saved');

})

module.exports = router;