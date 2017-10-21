import casual from 'casual';
import { times } from 'lodash';

export default {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
    queryInterface.bulkInsert(
      'Manufacturers',
      times(10, number => ({
        name: casual.company_name,
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
      {},
    ),

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    queryInterface.bulkDelete('Manufacturer', null, {}),
};
