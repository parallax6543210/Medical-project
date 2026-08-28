const patientModel = require('../models/patientModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');




async function register(req, res ) {

    let {email,password,username,name,age,gender,mobile} = req.body;

    let patient = await patientModel.findOne({        
         $or: [
        { email },
        { mobile }
    ]
    });

    if(patient)
        return res.status(400).json({message: 'User already exists'});

    // user = await patientModel.create({email,password,username,name,age,gender,mobile});    
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let patient = await patientModel.create({
                email,
                username,
                name,
                age,
                gender,
                mobile,
                password: hash,
            })
            let token = jwt.sign(
                {email:email, patient_id:patient._id},process.env.JWT_SECRET);
                res.cookie("token", token);
                res.status(200).json({message: 'User registered successfully'});
                
        });
    });
    
};

async function login(req, res) {

    let {email, password} = req.body;

    // let user = await patientModel.findOne({email, password});
    user = await patientModel.findOne({email});

    if(!user)
        return res.status(400).json({message: 'User does not exist'});

    let isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch)
        return res.status(400).json({message: 'Invalid credentials'});


    let token = jwt.sign(
        {id: user._id, email: user.email},process.env.JWT_SECRET);
        res.cookie("token", token);
        res.send("Patient logged in successfully");

};

async function logout(req, res) {
    res.clearCookie("token");
    res.send("Patient logged out successfully");
}



module.exports = {
    register,
    login,
    logout
};

