const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  id: {type: String, unique: true},
  img: {type: String},
  address: {type: String, minlength: 3},
  name: {type: String, minlength: 3},
  lastName: {type: String, minlength: 3},
  fullname: {type: String, minlength: 3},
  status: {type: String, minlength: 3},
  gender: {type: String, trim: true, },
  number: {type: String, trim: true, maxlength: 10 },
  age: {type: String},
  lastVisit: {type: String,trim: true},
  email: {type: String,trim: true},
  birthDate: {type: String,trim: true},
}, {
});


const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;