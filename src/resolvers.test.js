/* globals test expect */
import resolvers from './resolvers';

test('resolvers should have Query and Mutations attributes', () => {
  expect(resolvers.Query).toBeDefined();
  expect(resolvers.Mutation).toBeDefined();
});
