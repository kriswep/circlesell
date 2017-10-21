import casual from 'casual';
import { times } from 'lodash';

export default {
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    queryInterface.bulkInsert(
      'Products',
      times(10, number => ({
        name: casual.word,
        description: casual.description,
        createdAt: new Date(),
        updatedAt: new Date(),
        ManufacturerId: number % 3 + 1, // eslint-disable-line no-mixed-operators
      })),
      {},
    ),

  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    queryInterface.bulkDelete('Products', null, {}),
};
