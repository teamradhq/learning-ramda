import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mergeWith
 * Category:   object
 * 
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 * 
 * 
 * ```typescript
 * R.mergeWith(R.concat,
 *             { a: true, values: [10, 20] },
 *             { b: true, values: [15, 35] });
 * //=> { a: true, b: true, values: [10, 20, 15, 35] }
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mergeWith}
 * {@see https://ramdajs.com/docs/#mergeDeepWith,
                merge,
                mergeWithKey}
 */
describe('object.mergeWith', () => {
  it('should define R.mergeWith', () => {
    expect.assertions(1);

    expect(R.mergeWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mergeWith', () => {
    expect.assertions(1);
  });
});
