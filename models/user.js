const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_fullname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone_number:{
        type: Number,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    joined_Date:{
        type: Date,
        required:true,
        default:Date.now
    },
    cart:{
        type: String,
        required:true
    }
})

module.exports= mongoose.model('user',userSchema)