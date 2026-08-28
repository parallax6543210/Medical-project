const mongoose  = require('mongoose');

const patientSchema = new mongoose.Schema({
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
    }

} , {
    timestamps: true
});

const Patient = mongoose.model('Patient' , patientSchema);

module.exports = Patient;

