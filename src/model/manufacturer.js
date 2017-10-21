
module.exports = (sequelize, DataTypes) => {
  const Manufacturer = sequelize.define(
    'Manufacturer',
    {
      name: DataTypes.STRING,
    },
    {
      classMethods: {
        associate(models) {
          // associations can be defined here
        },
      },
    },
  );
  return Manufacturer;
};
