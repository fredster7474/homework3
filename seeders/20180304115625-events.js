'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const products = [
      { name: 'Knife', price: 10, description: 'Very nice if you want to eat something', image: null },
      { name: 'Fork', price: 15, description: 'Very nice to put something in your mouth', image: 'http://country929.com/files/2015/04/fork.jpg' },
      { name: 'Spoon', price: 21, description: 'If you like soup, this thing is what you need', image: 'http://i.huffpost.com/gen/1302381/images/o-SPOON-facebook.jpg' }
    ].map(product => ({ ...product, createdAt: 'NOW()', updatedAt: 'NOW()' }))
    return queryInterface.bulkInsert('products', products, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
