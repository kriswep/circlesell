import { omit } from 'lodash';

import Product from './connector';

export default {
  Query: {
    product(_, { id }) {
      return Product.find(id);
    },
    products(_, args) {
      return Product.findAll(args.limit, args.offset, omit(args, ['offset', 'limit']));
    },
  },
  Product: {
    manufacturer(product) {
      return Product.getManufacturer(product);
    },
    amount(product) {
      return Product.getAmount(product);
    },
  },
};
