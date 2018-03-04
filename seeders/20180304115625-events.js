'use strict';

module.exports = {
 up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Events', [
     { title: 'Gym', startDate: '2018-10-08 07:00:00', endDate: '2018-10-08 00:00', description: 'Feel the burn!' },
     { title: 'Dublin', startDate: '2018-01-12 09:30:00', endDate: '2018-02-01 18:00', description: 'Holiday' }
     { title: 'Paris', startDate: '2018-10-12 09:30:00', endDate: '2018-10-14 18:00', description: 'Holiday2' }
   ])
 },

 down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Events', null, {});
 }
};
