import db from '../../model';

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

export default Manufacturer;
