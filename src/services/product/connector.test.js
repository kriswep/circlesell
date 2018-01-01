/* globals describe test expect jest */
import Product from './connector';
import { Product as ProductDb } from '../../model';

global.promiseResolver = () => null;
global.promise = new Promise((resolve) => {
  global.promiseResolver = resolve;
});
jest.mock('../../model', () => ({
  Product: {
    find: jest.fn(),
    findAll: jest.fn(),
  },
}));

describe('Product Connector', () => {
  test('should define Product', () => {
    expect(Product).toBeDefined();
  });

  test('should find from db model', () => {
    const expected = 1;
    expect(Product.find.bind(null, expected)).not.toThrow();
    expect(ProductDb.find).toHaveBeenCalledWith({ where: { id: expected } });
    ProductDb.find.mockClear();
  });

  test('should find from db model', () => {
    const expected = 1;
    expect(Product.find.bind(null, expected)).not.toThrow();
    expect(ProductDb.find).toHaveBeenCalledWith({ where: { id: expected } });
    ProductDb.find.mockClear();
  });

  test('should findAll from db model', () => {
    const expected = { limit: 1, offset: 2, where: { id: 3 } };
    expect(Product.findAll.bind(null, expected.limit, expected.offset, expected.where)).not.toThrow();
    expect(ProductDb.findAll).toHaveBeenCalledWith(expected);
    ProductDb.findAll.mockClear();
  });

  test('should getManufacturer', () => {
    const product = { getManufacturer: jest.fn(() => true) };
    expect(Product.getManufacturer(product)).toBeTruthy();
    expect(product.getManufacturer).toHaveBeenCalled();
  });

  test('should getAmount', () => {
    const product = { getQuantity: jest.fn(() => true) };
    expect(Product.getAmount(product)).toBeTruthy();
    expect(product.getQuantity).toHaveBeenCalled();
  });
});
