// const express = require('express');
// const cookieParser = require('cookie-parser');
// // const router = express.Router();
// const patientModel = require('../models/patientModel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// app.use(cookieParser());

// app.get('/register', async (req, res) =>{

//     let {email, password, username, name, age, gender, mobile} = req.body;

//     let user = await patientModel.findOne({email, mobile});

//     if(user)
//         return res.status(400).json({message: 'User already exists'});

//     user = await patientModel.create({email, password, username, name, age, gender, mobile});

//     res.status(200).json({message: 'User registered successfully'});

//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(password, salt, (err, hash) => {
//             let patient = patientModel.create({
//                 email: email,
//                 password: hash,
//                 username: username,
//                 name: name,
//                 age: age,
//                 gender: gender,
//                 mobile: mobile
//             })
//             let token = jwt.sign(
//                 {id: patient._id, email: patient.email},process.env.JWT_SECRET);
//                 res.cookie("token", token, );
//                 res.send("Patient registered successfully");
//         });
//     });
    
// });

// app.get('/login', async (req, res) =>{

//     let {email, password, mobile} = req.body;

//     let user = await patientModel.findOne({email, password});

//     if(!user)
//         return res.status(400).json({message: 'User does not exist'});

//     let isMatch = await bcrypt.compare(password, user.password);

//     if(!isMatch)
//         return res.status(400).json({message: 'Invalid credentials'});

//     let token = jwt.sign(
//         {id: user._id, email: user.email},process.env.JWT_SECRET);
//         res.cookie("token", token);
//         res.send("Patient logged in successfully");

// });

// app.get('/logout', (req, res) => {
//     res.clearCookie("token");
//     res.send("Patient logged out successfully");
// });

// module.exports = router;