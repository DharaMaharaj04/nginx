const router = require('express').Router();
let Patient = require('../models/patients.model');

router.route('/').get((req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const { img, address, name, status, gender, number, age, lastVisit } = req.body;

  const newPatient = new PatientMessage({  img, address, name, status, gender, number, age, lastVisit })

  newPatient.save()
    .then(() => res.json(newPatient))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;