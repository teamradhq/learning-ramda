import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mergeDeepWith
 * Category:   object
 * 
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * 
 * and both associated values are also objects then the values will be
 * recursively merged.
 * otherwise the provided function is applied to associated values using the
 * resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 * 
 * 
 * 
 * ```typescript
 * R.mergeDeepWith(R.concat,
 *                 { a: true, c: { values: [10, 20] }},
 *                 { b: true, c: { values: [15, 35] }});
 * //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mergeDeepWith}
 * {@see https://ramdajs.com/docs/#mergeWith,
                mergeDeepWithKey}
 */
describe('object.mergeDeepWith', () => {
  it('should define R.mergeDeepWith', () => {
    expect.assertions(1);

    expect(R.mergeDeepWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mergeDeepWith', () => {
    expect.assertions(1);
  });
});
