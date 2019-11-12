const mongoose = require('mongoose');
const { Schema } = mongoose;


const ItinerarySchema = new Schema({
    title: {type: String, required: true},
    profilePic: {type: String},
    rating: {type: String},
    duration: {type: String},
    price: {type: Number, required: true},
    hashtags: {type: Array},
    
},
{ collection : 'Itineraries' });

module.exports = mongoose.model('itinerary', ItinerarySchema,);  