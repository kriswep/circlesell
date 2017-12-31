/* globals test expect jest */
import Manufacturer from './connector';
// import ManufacturerDb from '../../model/manufacturer';

global.promiseResolver = () => null;
global.promise = new Promise((resolve) => {
  global.promiseResolver = resolve;
});
jest.mock('../../model/manufacturer', () => ({
  ManufacturerDb: {
    find: jest.fn(),
    findAll: jest.fn(),
  },
  // PostDb: {
  //   find: jest.fn(() => global.promise),
  //   findAll: jest.fn(),
  // },
}));

test('connectors should define Manufacturer', () => {
  expect(Manufacturer).toBeDefined();
});

// test('author findSub should find from db model', () => {
//   const expected = 1;
//   expect(Author.findSub.bind(null, expected)).not.toThrow();
//   expect(AuthorDb.find).toHaveBeenCalledWith({ where: { sub: expected } });
//   AuthorDb.find.mockClear();
// });

// test('author find should find from db model', () => {
//   const expected = 1;
//   expect(Author.find.bind(null, expected)).not.toThrow();
//   expect(AuthorDb.find).toHaveBeenCalledWith({ where: { id: expected } });
//   AuthorDb.find.mockClear();
// });

// test('author findAll should not throw', () => {
//   const expected = { limit: 1, offset: 2, where: { id: 1 } };
//   expect(Author.findAll.bind(null, expected.limit, expected.offset, expected.where)).not.toThrow();
//   expect(AuthorDb.findAll).toHaveBeenCalledWith(expected);
//   AuthorDb.findAll.mockClear();
// });

// test('author getPosts should get Posts', () => {
//   const author = { getPosts: jest.fn(() => true) };
//   expect(Author.getPosts(author)).toBeTruthy();
//   expect(author.getPosts).toHaveBeenCalled();
// });
