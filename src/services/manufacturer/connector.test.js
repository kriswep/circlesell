/* globals describe test expect jest */
import Manufacturer from './connector';
import { Manufacturer as ManufacturerDb } from '../../model';

global.promiseResolver = () => null;
global.promise = new Promise((resolve) => {
  global.promiseResolver = resolve;
});
jest.mock('../../model', () => ({
  Manufacturer: {
    find: jest.fn(),
    findAll: jest.fn(),
  },
}));

describe('Manufacturer Connector', () => {
  test('should define Manufacturer', () => {
    expect(Manufacturer).toBeDefined();
  });

  test('should find from db model', () => {
    const expected = 1;
    expect(Manufacturer.find.bind(null, expected)).not.toThrow();
    expect(ManufacturerDb.find).toHaveBeenCalledWith({ where: { id: expected } });
    ManufacturerDb.find.mockClear();
  });

  test('should find from db model', () => {
    const expected = 1;
    expect(Manufacturer.find.bind(null, expected)).not.toThrow();
    expect(ManufacturerDb.find).toHaveBeenCalledWith({ where: { id: expected } });
    ManufacturerDb.find.mockClear();
  });

  test('should findAll from db model', () => {
    const expected = { limit: 1, offset: 2, where: { id: 3 } };
    expect(Manufacturer.findAll.bind(null, expected.limit, expected.offset, expected.where)).not.toThrow();
    expect(ManufacturerDb.findAll).toHaveBeenCalledWith(expected);
    ManufacturerDb.findAll.mockClear();
  });

  test('should getProducts', () => {
    const manufacturer = { getProducts: jest.fn(() => true) };
    expect(Manufacturer.getProducts(manufacturer)).toBeTruthy();
    expect(manufacturer.getProducts).toHaveBeenCalled();
  });
});
