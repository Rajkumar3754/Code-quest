const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

require('dotenv').config(); // Load environment variables from .env file

const validateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).send("Authorization header is missing or invalid");
        return;
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        res.status(401).send("Token is missing");
        return;
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).send("User is not authorized");
            return;
        }
        req.user = decoded.user;
        next();
    });
});

module.exports = validateToken;
