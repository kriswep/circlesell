/* globals test expect jest */
import Product from './connector';
import resolvers from './product.resolver';

jest.mock('./connector', () => ({
  find: jest.fn(),
  findAll: jest.fn(),
  getManufacturer: jest.fn(),
  getAmount: jest.fn(),
}));

test('resolvers should have Query and Product type attributes', () => {
  expect(resolvers.Query).toBeDefined();
  expect(resolvers.Query.product).toBeDefined();
  expect(resolvers.Query.products).toBeDefined();
  expect(resolvers.Product).toBeDefined();
  expect(resolvers.Product.manufacturer).toBeDefined();
  expect(resolvers.Product.amount).toBeDefined();
});

test('product query should find', () => {
  const expected = 1;
  expect(resolvers.Query.product.bind(null, '', { id: expected })).not.toThrow();
  expect(Product.find).toHaveBeenCalledWith(expected);

  Product.find.mockClear();
});

test('products query should findAll', () => {
  const expected = { limit: 1, offset: 2, rest: 3 };
  expect(resolvers.Query.products.bind(null, '', expected)).not.toThrow();
  expect(Product.findAll).toHaveBeenCalledWith(expected.limit, expected.offset, {
    rest: 3,
  });

  Product.findAll.mockClear();
});

test('Product should getManufacturers', () => {
  const expected = { product: 1 };
  expect(resolvers.Product.manufacturer.bind(null, expected)).not.toThrow();
  expect(Product.getManufacturer).toHaveBeenCalledWith(expected);

  Product.getManufacturer.mockClear();
});

test('Product should getAmount', () => {
  const expected = { product: 1 };
  expect(resolvers.Product.amount.bind(null, expected)).not.toThrow();
  expect(Product.getAmount).toHaveBeenCalledWith(expected);

  Product.getAmount.mockClear();
});
