const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Person = require('../models/persons');

router.get('/persons', async (req, res) => {
    const persons = await Person.find({});
    res.render('persons', {persons});
});

router.get('/addPerson', (req, res) =>{
    res.render('addPerson');
});

router.post('/addPerson', (req, res) =>{
    const newPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });

    newPerson
    .save()
    .then(data => {res.redirect('/persons')})
    .catch(error =>{res.json({message:error})});
});


module.exports = router;