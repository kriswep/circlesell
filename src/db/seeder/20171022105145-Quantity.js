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
      'Quantities',
      times(10, number => ({
        amount: casual.integer(),
        createdAt: new Date(),
        updatedAt: new Date(),
        ProductId: number + 1,
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
    queryInterface.bulkDelete('Quantities', null, {}),
};
