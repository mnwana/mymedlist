const  {ProviderDetails} = require('../models');

const providerData = [];

const seedProvider = () => ProviderDetails.bulkCreate(providerData);

module.exports = seedProvider;