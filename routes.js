const express=require('express');
const router=express.Router();

const City = require ('./models/city.js');


router.get('/',async(req,res)=>{
    const Cities = await City.find();
    res.json(Cities);
});

router.post('/',async(req,res)=>{
    // const { name, country}=req.body;
    // const city= new City({name,country});
    // city.save();
    // res.json('city saved');
    console.log(req.body);
    res.json('okidoki');
})

module.exports = router;