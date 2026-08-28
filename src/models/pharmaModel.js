const mongoose  = require('mongoose');

const pharmaSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    name:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    pincode:{
        type: Number,
        required: true
    },
    gst:{
        type: String,
        required: true
    }

} , {
    timestamps: true
});

const Pharma = mongoose.model('Pharma' , pharmaSchema);

module.exports = Pharma ;

