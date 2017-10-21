export default {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      ManufacturerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Manufacturers',
          key: 'id',
        },
        onDelete: 'set null',
        onUpdate: 'cascade',
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Products'),
};
