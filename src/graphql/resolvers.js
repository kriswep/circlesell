import { omit } from 'lodash';

import { Author, Post, Manufacturer, Product, Quantity } from '../model/connectors';

const resolvers = {
  Query: {
    post(_, { id }) {
      return Post.find(id);
    },
    posts(_, args) {
      return Post.findAll(args.limit, args.offset, omit(args, ['offset', 'limit']));
    },
    user(_, __, { user }) {
      if (user && user.sub) {
        return Author.findSub('demosub');
      }
      throw Error('need to be logged in');
    },
    author(_, { id }) {
      return Author.find(id);
    },
    authors(_, args) {
      return Author.findAll(args.limit, args.offset, omit(args, ['offset', 'limit']));
    },
    manufacturer(_, { id }) {
      return Manufacturer.find(id);
    },
    manufacturers(_, args) {
      return Manufacturer.findAll(args.limit, args.offset, omit(args, ['offset', 'limit']));
    },
    product(_, { id }) {
      return Product.find(id);
    },
    products(_, args) {
      return Product.findAll(args.limit, args.offset, omit(args, ['offset', 'limit']));
    },
    quantity(_, { id }) {
      return Quantity.find(id);
    },
    quantitys(_, args) {
      return Quantity.findAll(args.limit, args.offset, omit(args, ['offset', 'limit']));
    },
  },
  Mutation: {
    upvotePost: (_, { postId }, { user }) => {
      if (user && user.sub) {
        return Post.upvotePost(postId);
      }
      throw Error('need to be logged in');
    },
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
  },
  Manufacturer: {
    products(manufacturer) {
      return Manufacturer.getProducts(manufacturer);
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
  Quantity: {
    product(quantity) {
      return Quantity.getProduct(quantity);
    },
  },
};

export default resolvers;
