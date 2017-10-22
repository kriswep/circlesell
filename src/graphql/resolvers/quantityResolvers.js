import { omit } from 'lodash';

import { Quantity } from '../../model/connectors';

export default {
  Query: {
    quantity(_, { id }) {
      return Quantity.find(id);
    },
    quantitys(_, args) {
      return Quantity.findAll(args.limit, args.offset, omit(args, ['offset', 'limit']));
    },
  },
  Quantity: {
    product(quantity) {
      return Quantity.getProduct(quantity);
    },
  },
};
