require('dotenv').config();
// const express = require('express');
// const router = express.Router();
const connectDB = require('./src/db/db');
// const authRoutes = require('./src/auth/patient.auth');
// const cookieParser = require('cookie-parser');
// const patientModel = require('./src/models/patientModel');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
const app = require('./src/app');

const PORT = process.env.PORT;

// const app = express();

connectDB();


// app.use(cookieParser());
// app.use(express.json());
// app.use('/auth', authRoutes);


// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })

// app.post('/api/register', async (req, res , next) =>{

//     let {email,password,username,name,age,gender,mobile} = req.body;

//     let patient = await patientModel.findOne({        
//          $or: [
//         { email },
//         { mobile }
//     ]
//     });

//     if(patient)
//         return res.status(400).json({message: 'User already exists'});

//     // user = await patientModel.create({email,password,username,name,age,gender,mobile});    
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(password, salt, async (err, hash) => {
//             let patient = await patientModel.create({
//                 email,
//                 username,
//                 name,
//                 age,
//                 gender,
//                 mobile,
//                 password: hash,
//             })
//             let token = jwt.sign(
//                 {email:email, patient_id:patient._id},process.env.JWT_SECRET);
//                 res.cookie("token", token);
//                 res.status(200).json({message: 'User registered successfully'});
                
//         });
//     });
    
// });

// app.get('/login', async (req, res) =>{

//     let {email, password} = req.body;

//     // let user = await patientModel.findOne({email, password});
//     user = await patientModel.findOne({email});

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



// function patientAuthMiddleware(req, res, next) {
//     const token = req.cookies.token;
//     if (!token) {
//         return res.status(401).json({ message: 'Access denied. No token provided.' });
//     }
//     // Here you would typically verify the token against your database
//     // For now, we'll just call next() to proceed
//     next();
    
// }




app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
});

