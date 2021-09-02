'use strict';

const { CategorySchema, CATEGORY_TABLE } = require('./../models/category.model');
const { ProductSchema, PRODUCT_TABLE } = require('./../models/product.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};
