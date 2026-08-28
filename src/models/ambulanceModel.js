const mongoose  = require('mongoose');

const ambulanceSchema = new mongoose.Schema({
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
    numberPlate:{
        type: String,
        required: true
    },
    hospitalName:{
        type: String
    },
    agencyName:{
        type: String
    },
    isgovt:{
        type: Boolean,
        required: true
    }

} , {
    timestamps: true
});

const Ambulance = mongoose.model('Ambulance' , ambulanceSchema  );

module.exports = Ambulance;

