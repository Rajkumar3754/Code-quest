// userroute.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, currentUser } = require('../controller/userController');
const validateToken = require('../middleware/validateTokenHandler');


router.post("/register", registerUser);

router.post("/logins", loginUser );

router.get("/current", validateToken,  currentUser );

module.exports = router;
