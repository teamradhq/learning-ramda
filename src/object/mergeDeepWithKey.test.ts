import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mergeDeepWithKey
 * Category:   object
 * 
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * 
 * and both associated values are also objects then the values will be
 * recursively merged.
 * otherwise the provided function is applied to the key and associated values
 * using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 * 
 * 
 * 
 * ```typescript
 * let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 * R.mergeDeepWithKey(concatValues,
 *                    { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                    { b: true, c: { thing: 'bar', values: [15, 35] }});
 * //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mergeDeepWithKey}
 * {@see https://ramdajs.com/docs/#mergeWithKey,
                mergeDeepWith}
 */
describe('object.mergeDeepWithKey', () => {
  it('should define R.mergeDeepWithKey', () => {
    expect.assertions(1);

    expect(R.mergeDeepWithKey).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mergeDeepWithKey', () => {
    expect.assertions(1);
  });
});
