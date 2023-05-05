const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');

router.get('/gente', async (req, res) => {
    const Persons = await Person.find({});
    res.json(Persons);
});

module.exports = router;