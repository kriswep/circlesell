import { omit } from 'lodash';

import { Manufacturer } from '../../model/connectors';

const resolvers = {
  Query: {
    manufacturer(_, { id }) {
      return Manufacturer.find(id);
    },
    manufacturers(_, args) {
      return Manufacturer.findAll(args.limit, args.offset, omit(args, ['offset', 'limit']));
    },
  },
  Manufacturer: {
    products(manufacturer) {
      return Manufacturer.getProducts(manufacturer);
    },
  },
};

export default resolvers;
