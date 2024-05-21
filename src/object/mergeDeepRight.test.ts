import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mergeDeepRight
 * Category:   object
 * 
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * 
 * and both values are objects, the two values will be recursively merged
 * otherwise the value from the second object will be used.
 * 
 * 
 * 
 * ```typescript
 * R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                  { age: 40, contact: { email: 'baa@example.com' }});
 * //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mergeDeepRight}
 * {@see https://ramdajs.com/docs/#merge,
                mergeDeepLeft,
                mergeDeepWith,
                mergeDeepWithKey}
 */
describe('object.mergeDeepRight', () => {
  it('should define R.mergeDeepRight', () => {
    expect.assertions(1);

    expect(R.mergeDeepRight).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mergeDeepRight', () => {
    expect.assertions(1);
  });
});
