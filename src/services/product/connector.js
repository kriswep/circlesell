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
  getManufacturer(post) {
    return post.getManufacturer();
  },
  getAmount(post) {
    return post.getQuantity();
  },
};

export default Product;
