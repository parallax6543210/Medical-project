const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const patientAuth = require('./routes/patient.auth.route');
const patientAuthMiddleware = require('./middleware/patientauth.middleware').patientAuthMiddleware;

const router = express.Router();
// const patientModel = require('../models/patient.model');
// const connectDB = require('../config/db');

const jwt = require('jsonwebtoken');

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use('/api/patient', patientAuth);
app.get('/api/pharma/',);

module.exports = app;