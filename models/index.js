const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define associations
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});


Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
  as: 'tagged_products', 
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Export the models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
