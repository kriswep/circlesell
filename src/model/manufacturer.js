import { ProductFactory } from './product';

export const ManufacturerFactory = (sequelize, DataTypes) =>
  sequelize.define(
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

export default (sequelize, DataTypes) => {
  const Manufacturer = ManufacturerFactory(sequelize, DataTypes);
  const Product = ProductFactory(sequelize, DataTypes);

  Manufacturer.hasMany(Product);

  return Manufacturer;
};
