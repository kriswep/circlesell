import { omit } from 'lodash';

import Quantity from './connector';
import { requiresAuth } from '../../utils/permissions';

export default {
  Query: {
    quantity(_, { id }) {
      return Quantity.find(id);
    },
    quantitys(_, args) {
      return Quantity.findAll(args.limit, args.offset, omit(args, ['offset', 'limit']));
    },
  },
  Mutation: {
    setQuantity: requiresAuth.addResolver((_, { id, amount }, { user }) =>
      Quantity.setQuantity(id, amount)),
  },
  Quantity: {
    product(quantity) {
      return Quantity.getProduct(quantity);
    },
  },
};
