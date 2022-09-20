const  {  PatientDetails } = require('../models');

const patientData = [];

const seedPatient = () => PatientDetails.bulkCreate(patientData);

module.exports = seedPatient;