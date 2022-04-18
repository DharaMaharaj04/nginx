const router = require('express').Router();
let Patient = require('../models/patients.model');
const mongoose = require('mongoose');
router.route('/').get((req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
  const {id, img, address, name, status, gender, number, age, lastVisit, email, birthDate } = req.body;

  const newPatient = new Patient({id, img, address, name, status, gender, number, age, lastVisit, email, birthDate })

  newPatient.save()
    .then(() => res.json(newPatient))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Patient.findByIdAndDelete(req.params.id)
    .then(() => res.json('Patient deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  Patient.findById(req.params.id)
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').patch((req, res) => {
  Patient.findById(req.params.id)
    .then(patients => {
      patients.id = req.body.id;
      patients.img = req.body.img;
      patients.address = req.body.address;
      patients.name = req.body.name;
      patients.status = req.body.status;
      patients.gender = req.body.gender;
      patients.number = req.body.number;
      patients.age = req.body.age;
      patients.lastVisit = req.body.lastVisit;
      patients.email = req.body.email;
      patients.birthDate = req.body.birthDate;

      patients.save()
        .then(() => res.json(patients))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;