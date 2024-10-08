const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')


const userSchema = mongoose.Schema({

 
    username:{
        type:String,
        required:[true,"please add username"],
    },
    email:{
        type:String,
        required:[true,"please add the user email address"],
        unique:[true,"email address already taken"],
    },
    password:{
        type:String,
        required:[true,"please add the user password"],
    },
},{
    timestamps:true,
}
);



module.exports = mongoose.model("User",userSchema)