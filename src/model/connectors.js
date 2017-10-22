// https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035
import { AuthorDb, PostDb } from './db';
import db from '../model';

const Author = {
  findSub(sub) {
    return AuthorDb.find({ where: { sub } });
  },
  find(id) {
    return AuthorDb.find({ where: { id } });
  },
  findAll(limit, offset, args) {
    return AuthorDb.findAll({
      limit,
      offset,
      where: args,
    });
  },
  getPosts(author) {
    return author.getPosts();
  },
};

const Post = {
  find(id) {
    return PostDb.find({ where: { id } });
  },
  findAll(limit, offset, args) {
    return PostDb.findAll({
      limit,
      offset,
      where: args,
    });
  },
  getAuthor(post) {
    return post.getAuthor();
  },
  upvotePost(id) {
    return PostDb.find({ where: { id } }).then(post =>
      post
        .update({
          votes: post.votes + 1,
        })
        .then(() => PostDb.find({ where: { id } })));
  },
};

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
};

export { Author, Post, Manufacturer, Product, Quantity };
