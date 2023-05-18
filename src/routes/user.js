const express = require('express');
const userSchema = require('../models/user');
const router = express.Router();

//Create a new user
router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user.save().then((data) => res.json(data)).catch((err) => res.json(err));
});

module.exports = router;