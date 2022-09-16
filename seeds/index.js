const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedList = require('./listData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedList();

  process.exit(0);
};

seedAll();
