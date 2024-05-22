import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       is
 * Category:   type
 *
 * See if an object (i.e. val) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 * If val was created using Object.create, R.is(Object, val) === true.
 *
 *
 * ```typescript
 * R.is(Object, {}); //=> true
 * R.is(Number, 1); //=> true
 * R.is(Object, 1); //=> false
 * R.is(String, 's'); //=> true
 * R.is(String, new String('')); //=> true
 * R.is(Object, new String('')); //=> true
 * R.is(Object, 's'); //=> false
 * R.is(Number, {}); //=> false
 * ```
 *
 * {@see https://ramdajs.com/docs/#is}
 */
describe('type.is', () => {
  it('should define R.is', () => {
    expect.assertions(1);

    expect(R.is).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.is', () => {
    expect.assertions(1);
  });
});
