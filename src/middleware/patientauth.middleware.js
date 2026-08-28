const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');


function patientAuthMiddleware(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
    // Here you would typically verify the token against your database
    // For now, we'll just call next() to proceed
    next();
    
}

module.exports = {patientAuthMiddleware};