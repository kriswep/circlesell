export const ManufacturerFactory = (sequelize, DataTypes) =>
  sequelize.define('Manufacturer', {
    name: DataTypes.STRING,
  });

export default (sequelize, DataTypes) => {
  const Manufacturer = ManufacturerFactory(sequelize, DataTypes);

  Manufacturer.associate = (models) => {
    Manufacturer.hasMany(models.Product);
  };

  return Manufacturer;
};
