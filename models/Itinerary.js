const mongoose = require('mongoose');
const { Schema } = mongoose;


const ItinerarySchema = new Schema({
    name: {type: String, required: true},
    city: {type: String, required: true},
    username: {type: String},
    userphoto: {type: String},
    raintg:{type: String},
    duration:{type:Number},
    price: {type: String, required: true},
    hashtags: {type: Array},
    
},
{ collection : 'Itineraries' });

module.exports = mongoose.model('itinerary', ItinerarySchema,);     