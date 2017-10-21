import { ManufacturerFactory } from './manufacturer';

export const ProductFactory = (sequelize, DataTypes) =>
  sequelize.define(
    'Product',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
    },
    {
      classMethods: {
        associate(models) {
          console.log(models);
          // associations can be defined hereTeam.belongsTo(Player);
        },
      },
    },
  );

export default (sequelize, DataTypes) => {
  const Product = ProductFactory(sequelize, DataTypes);
  const Manufacturer = ManufacturerFactory(sequelize, DataTypes);

  Product.belongsTo(Manufacturer);

  return Product;
};
