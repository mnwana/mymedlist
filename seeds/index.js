const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedList = require('./listData');
const seedProvider = require('./providerData');
const seedPatient = require('./patientData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPatient();

  await seedProvider();

  await seedList();

  process.exit(0);
};

seedAll();
