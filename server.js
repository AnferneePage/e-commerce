const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const seedCategories = require('./seeds/category-seeds.js');
const seedProducts = require('./seeds/product-seeds.js');
const seedTags = require('./seeds/tag-seeds.js');
const seedProductTags = require('./seeds/product-tag-seeds.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


sequelize.sync({ force: true }).then(async () => {
  
  await seedCategories();
  await seedProducts();
  await seedTags();
  await seedProductTags();

  // Start the server after seeding is complete
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

