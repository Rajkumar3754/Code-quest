const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required: [true, "please add the username"]
    },
    email:{
        type:String,
        required: [true, "please add the email"]
    },
    phone:{
        type:String,
        required: [true, "please add the contact number"]
    },
},{
    timestamps:true
});

const ContactModel = mongoose.model("contact", contactSchema);

module.exports = ContactModel;
