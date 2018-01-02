/* globals test expect jest */
import Quantity from './connector';
import resolvers from './quantity.resolver';

jest.mock('./connector', () => ({
  find: jest.fn(),
  findAll: jest.fn(),
  setQuantity: jest.fn(),
  getProduct: jest.fn(),
}));

test('resolvers should have Query, Mutation and Quantity type attributes', () => {
  expect(resolvers.Query).toBeDefined();
  expect(resolvers.Query.quantity).toBeDefined();
  expect(resolvers.Query.quantitys).toBeDefined();
  expect(resolvers.Mutation).toBeDefined();
  expect(resolvers.Mutation.setQuantity).toBeDefined();
  expect(resolvers.Quantity).toBeDefined();
  expect(resolvers.Quantity.product).toBeDefined();
});

test('quantity query should find', () => {
  const expected = 1;
  expect(resolvers.Query.quantity.bind(null, '', { id: expected })).not.toThrow();
  expect(Quantity.find).toHaveBeenCalledWith(expected);

  Quantity.find.mockClear();
});

test('quantitys query should findAll', () => {
  const expected = { limit: 1, offset: 2, rest: 3 };
  expect(resolvers.Query.quantitys.bind(null, '', expected)).not.toThrow();
  expect(Quantity.findAll).toHaveBeenCalledWith(expected.limit, expected.offset, {
    rest: 3,
  });

  Quantity.findAll.mockClear();
});

test('setQuantity mutation should setQuantity', () => {
  const expected = { id: 1, amount: 2 };
  const user = { user: 3 };
  expect(resolvers.Mutation.setQuantity.bind(null, '', expected, user)).not.toThrow();
  expect(Quantity.setQuantity).toHaveBeenCalledWith(expected.id, expected.amount);

  Quantity.setQuantity.mockClear();
});

test('Quantity should getProduct', () => {
  const expected = { product: 1 };
  expect(resolvers.Quantity.product.bind(null, expected)).not.toThrow();
  expect(Quantity.getProduct).toHaveBeenCalledWith(expected);

  Quantity.getProduct.mockClear();
});
