// https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035
import db from '../model';

const Manufacturer = {
  find(id) {
    return db.Manufacturer.find({ where: { id } });
  },
  findAll(limit, offset, args) {
    return db.Manufacturer.findAll({
      limit,
      offset,
      where: args,
    });
  },
  getProducts(manufacturer) {
    return manufacturer.getProducts();
  },
};

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

const Quantity = {
  find(id) {
    return db.Quantity.find({ where: { id } });
  },
  findAll(limit, offset, args) {
    return db.Quantity.findAll({
      limit,
      offset,
      where: args,
    });
  },
  getProduct(quantity) {
    return quantity.getProduct();
  },
  setQuantity(id, amount) {
    return db.Quantity.find({ where: { id } }).then(quantity =>
      quantity
        .update({
          amount,
        })
        .then(() => db.Quantity.find({ where: { id } })));
  },
};

export { Manufacturer, Product, Quantity };
