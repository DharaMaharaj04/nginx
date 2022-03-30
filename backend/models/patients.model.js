const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema({
  img: {type: String},
  address: {type: String, minlength: 3},
  name: {type: String, minlength: 3},
  lastName: {type: String, minlength: 3},
  fullname: {type: String, minlength: 3},
  status: {type: String, minlength: 3},
  gender: {type: String, trim: true, minlength: 3 },
  number: {type: String, unique: true, trim: true, minlength: 3 },
  age: {type: String, trim: true, minlength: 3},
  lastVisit: {type: String,trim: true, minlength: 3},
}, {
  timestamps: true,
});


const Patient = mongoose.model('Patient',patientSchema);

module.exports = Patient;