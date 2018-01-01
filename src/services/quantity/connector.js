import db from '../../model';

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
    return db.Quantity.find({ where: { id } })
      .then(quantity =>
        quantity.update({
          amount,
        }))
      .then(() => db.Quantity.find({ where: { id } }));
  },
};

export default Quantity;
