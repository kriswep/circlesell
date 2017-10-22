export default {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Quantities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      ProductId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Products',
          key: 'id',
        },
        onDelete: 'set null',
        onUpdate: 'cascade',
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Quantities'),
};
