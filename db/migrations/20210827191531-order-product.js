'use strict';

const { ORDER_PRODUCT_TABLE, OrderProductSchema } = require('./../models/order-product.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  }
};

