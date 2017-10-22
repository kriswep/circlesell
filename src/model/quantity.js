export default (sequelize, DataTypes) => {
  const Quantity = sequelize.define('Quantity', {
    amount: {
      type: DataTypes.INTEGER.UNSIGNED,
      validate: {
        min: 0,
        // isPositive(value) {
        //   if (value < 0) {
        //     throw new Error('Only positive amount is allowed!');
        //   }
        // },
      },
    },
  });

  Quantity.associate = (models) => {
    Quantity.belongsTo(models.Product);
  };

  return Quantity;
};
