/* globals test expect jest */
import Manufacturer from './connector';
import resolvers from './manufacturer.resolver';

jest.mock('./connector', () => ({
  find: jest.fn(),
  findAll: jest.fn(),
  getProducts: jest.fn(),
}));

test('resolvers should have Query and Manufacturer type attributes', () => {
  expect(resolvers.Query).toBeDefined();
  expect(resolvers.Manufacturer).toBeDefined();
});

test('manufacturer query should find', () => {
  const expected = 1;
  expect(resolvers.Query.manufacturer.bind(null, '', { id: expected })).not.toThrow();
  expect(Manufacturer.find).toHaveBeenCalledWith(expected);

  Manufacturer.find.mockClear();
});

test('manufacturers query should findAll', () => {
  const expected = { limit: 1, offset: 2, rest: 3 };
  expect(resolvers.Query.manufacturers.bind(null, '', expected)).not.toThrow();
  expect(Manufacturer.findAll).toHaveBeenCalledWith(expected.limit, expected.offset, {
    rest: 3,
  });

  Manufacturer.findAll.mockClear();
});

test('Manufacturer should getProducts', () => {
  const expected = { manufacturer: 1 };
  expect(resolvers.Manufacturer.products.bind(null, expected)).not.toThrow();
  expect(Manufacturer.getProducts).toHaveBeenCalledWith(expected);

  Manufacturer.getProducts.mockClear();
});
