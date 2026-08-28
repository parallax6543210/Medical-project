const mongoose  = require('mongoose');

const stateadminSchema = new mongoose.Schema({
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
    govtId:{
        type: String,
        required: true,
        unique: true
    }

} , {
    timestamps: true
});

const StateAdmin = mongoose.model('StateAdmin' , stateadminSchema);

module.exports = StateAdmin;

