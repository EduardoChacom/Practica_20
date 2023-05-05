const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');

router.get('/gente', async (req, res) => {
    const Persons = await Person.find({});
    res.json(Persons);
});

router.get('/addPerson', (req, res) =>{
    res.render('addPerson');
});

router.post('/addPerson', (req, res) =>{
    const newPerson = Person ({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });

    newPerson
    .save()
    .then((data) => {res.redirect('/gente')})
    .catch((error) =>{res.json({message:error})});
});

module.exports = router;