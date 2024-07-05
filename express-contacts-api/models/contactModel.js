const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({


    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },



    name: {
        type: String, // 'Type' should be 'type'
        required: [true, "Please add the contact name"]
    },
    email: {
        type: String, // 'Type' should be 'type'
        required: [true, "Please add the email address"]
    },
    phone: {
        type: String, // 'Type' should be 'type'
        required: [true, "Please add the contact number"]
    }
}, {
    timestamps: true // 'Timestamps' should be 'timestamps'
});

module.exports = mongoose.model("Contact", contactSchema);
