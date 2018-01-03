/* globals test expect */
import { omit } from 'lodash';
import db from './index';

test('db model definitions should be the right ones', () => {
  expect(omit(db, ['sequelize', 'Sequelize'])).toMatchSnapshot();
});
