import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mergeWithKey
 * Category:   object
 * 
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 * 
 * 
 * ```typescript
 * let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 * R.mergeWithKey(concatValues,
 *                { a: true, thing: 'foo', values: [10, 20] },
 *                { b: true, thing: 'bar', values: [15, 35] });
 * //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mergeWithKey}
 * {@see https://ramdajs.com/docs/#mergeDeepWithKey,
                merge,
                mergeWith}
 */
describe('object.mergeWithKey', () => {
  it('should define R.mergeWithKey', () => {
    expect.assertions(1);

    expect(R.mergeWithKey).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mergeWithKey', () => {
    expect.assertions(1);
  });
});
