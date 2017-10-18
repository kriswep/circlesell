import { omit } from 'lodash';

import { Author, Post } from '../model/connectors';

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
};

export default resolvers;
