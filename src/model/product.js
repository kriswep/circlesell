export const ProductFactory = (sequelize, DataTypes) =>
  sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  });

export default (sequelize, DataTypes) => {
  const Product = ProductFactory(sequelize, DataTypes);

  Product.associate = (models) => {
    Product.belongsTo(models.Manufacturer);
    Product.hasOne(models.Quantity);
  };

  return Product;
};
