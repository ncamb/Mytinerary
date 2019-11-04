const mongoose = require('mongoose');
const { Schema } = mongoose;


const citySchema = new Schema({
    name: {type: String, required: true},
    country: {type: String, required:true}
},
{ collection : 'cities' });

module.exports = mongoose.model('City', citySchema,);