const sequelize = require('../config/connection');
const seedComments = require('./comments');
const seedProducts = require('./products');
const seedUsers = require('./users');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedProducts();

  await seedComments();

  process.exit(0);
};

seedAll();
