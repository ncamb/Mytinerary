const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');


const userSchema = new Schema({
    username: {type: String, required: true},
    Firtsname: {type: String},
    lastname: {type: String},
    email:{type: String},
    imgurl:{type: String, required:true},
    password:{type: String, required:true},
},
{ collection : 'users' });

userSchema.pre('save',function(next){
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password,salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

module.exports = mongoose.model('User', userSchema,);