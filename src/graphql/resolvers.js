import { omit } from 'lodash';

import { Author, Post, Manufacturer, Product } from '../model/connectors';

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
      return manufacturer.getProducts();
    },
  },
  Product: {
    manufacturer(product) {
      return product.getManufacturer();
    },
  },
};

export default resolvers;
