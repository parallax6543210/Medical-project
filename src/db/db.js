const mongoose = require('mongoose');
const patient = require('../models/patientModel');
const pharma = require('../models/pharmaModel');
const doctor = require('../models/doctorModel');
const stateadmin = require('../models/stateadminModel');
const ambulance = require('../models/ambulanceModel');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }

}

module.exports = connectDB;