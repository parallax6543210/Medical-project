const mongoose  = require('mongoose');

const doctorSchema = new mongoose.Schema({
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
    age:{
        type: Number,
        required: true
    },
    gender:{
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
    specialization:{
        type: String,
        required: true
    },
    degree:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    workingHospital:{
        type: String,
        required: true
    },
    timings:{
        type: String,
        required: true
    },
    slotDuration:{
        type: Number,
        required: true
    }

} , {
    timestamps: true
});

const Doctor = mongoose.model('Doctor' , doctorSchema);

module.exports = Doctor;

