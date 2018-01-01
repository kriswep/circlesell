/* globals describe test expect jest */
import Quantity from './connector';
import { Quantity as QuantityDb } from '../../model';

global.promiseResolver = () => null;
global.promise = new Promise((resolve) => {
  global.promiseResolver = resolve;
});
jest.mock('../../model', () => ({
  Quantity: {
    // find: jest.fn(() => ({ then: jest.fn(() => ({ then: jest.fn() })) })),
    find: jest.fn(() => global.promise),
    findAll: jest.fn(),
  },
}));

describe('Quantity Connector', () => {
  test('should define Quantity', () => {
    expect(Quantity).toBeDefined();
  });

  test('should find from db model', () => {
    const expected = 1;
    expect(Quantity.find.bind(null, expected)).not.toThrow();
    expect(QuantityDb.find).toHaveBeenCalledWith({ where: { id: expected } });
    QuantityDb.find.mockClear();
  });

  test('should find from db model', () => {
    const expected = 1;
    expect(Quantity.find.bind(null, expected)).not.toThrow();
    expect(QuantityDb.find).toHaveBeenCalledWith({ where: { id: expected } });
    QuantityDb.find.mockClear();
  });

  test('should findAll from db model', () => {
    const expected = { limit: 1, offset: 2, where: { id: 3 } };
    expect(Quantity.findAll.bind(null, expected.limit, expected.offset, expected.where)).not.toThrow();
    expect(QuantityDb.findAll).toHaveBeenCalledWith(expected);
    QuantityDb.findAll.mockClear();
  });

  test('should getProduct', () => {
    const quantity = { getProduct: jest.fn(() => true) };
    expect(Quantity.getProduct(quantity)).toBeTruthy();
    expect(quantity.getProduct).toHaveBeenCalled();
  });

  test('should setQuantity', () => {
    const expected = { id: 1, amount: 2 };
    Quantity.setQuantity(expected.id, expected.amount);
    expect(QuantityDb.find).toHaveBeenCalledWith({ where: { id: expected.id } });

    global.promiseResolver({
      then: jest.fn((update) => {
        const quantity = { update: jest.fn(() => true) };
        update(quantity);
        expect(Quantity.getProduct(quantity)).toBeTruthy();
        expect(quantity.getProduct).toHaveBeenCalled();
        return true;
      }),
    });
  });
});
