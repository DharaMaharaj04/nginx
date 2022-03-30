const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const patientRouter = require('./routes/patients');
app.use('/patients', patientRouter);
const exercisesRouter = require('./routes/exercises');
app.use('/exercises', exercisesRouter);
app.use(express.static('public'));
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});