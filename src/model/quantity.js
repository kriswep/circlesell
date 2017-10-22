export default (sequelize, DataTypes) => {
  const Quantity = sequelize.define('Quantity', {
    amount: DataTypes.INTEGER,
  });

  Quantity.associate = (models) => {
    Quantity.belongsTo(models.Product);
  };

  return Quantity;
};
