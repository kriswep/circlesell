import db from '../../model';

const Product = {
  find(id) {
    return db.Product.find({ where: { id } });
  },
  findAll(limit, offset, args) {
    return db.Product.findAll({
      limit,
      offset,
      where: args,
    });
  },
  getManufacturer(product) {
    return product.getManufacturer();
  },
  getAmount(product) {
    return product.getQuantity();
  },
};

export default Product;
