const pharmaModel = require('../models/pharmaModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');




async function register(req, res ) {

    let {email,password,username,name,mobile,address,city,state,pincode,gst} = req.body;

    let pharma = await pharmaModel.findOne({        
         $or: [
        { email },
        { mobile }
    ]
    });

    if(pharma)
        return res.status(400).json({message: 'User already exists'});

    // user = await patientModel.create({email,password,username,name,age,gender,mobile});    
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let pharma = await pharmaModel.create({
                email,
                username,
                name,
                mobile,
                address,
                city,
                state,
                pincode,
                gst,
                password: hash,
            })
            let token = jwt.sign(
                {email:email, pharma_id:pharma._id},process.env.JWT_SECRET);
                res.cookie("token", token);
                res.status(200).json({message: 'Pharma registered successfully'});
                
        });
    });
    
};

async function login(req, res) {

    let {email, password, username} = req.body;

    // let user = await patientModel.findOne({email, password});
    user = await pharmaModel.findOne({email, username});

    if(!user)
        return res.status(400).json({message: 'User does not exist'});

    let isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch)
        return res.status(400).json({message: 'Invalid credentials'});


    let token = jwt.sign(
        {id: user._id, email: user.email, username:username},process.env.JWT_SECRET);
        res.cookie("token", token);
        res.send("Pharma logged in successfully");

};

async function logout(req, res) {
    res.clearCookie("token");
    res.send("Pharma logged out successfully");
}



module.exports = {
    register,
    login,
    logout
};

