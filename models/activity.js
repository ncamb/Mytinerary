const mongoose = require('mongoose');
const { Schema } = mongoose;


const ActivitySchema = new Schema({
    title:{type: String, required: true},
    name: {type: String, required: true},
    direction: {type: String},
    img: {type: String},
    duration:{type: Number},
    price: {type: Number, required: true},
    description: {type: String},
    
},
{ collection : 'Activities' });

module.exports = mongoose.model('activity', ActivitySchema,);     