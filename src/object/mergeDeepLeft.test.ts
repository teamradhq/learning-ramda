import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mergeDeepLeft
 * Category:   object
 * 
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * 
 * and both values are objects, the two values will be recursively merged
 * otherwise the value from the first object will be used.
 * 
 * 
 * 
 * ```typescript
 * R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                 { age: 40, contact: { email: 'baa@example.com' }});
 * //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mergeDeepLeft}
 * {@see https://ramdajs.com/docs/#merge,
                mergeDeepRight,
                mergeDeepWith,
                mergeDeepWithKey}
 */
describe('object.mergeDeepLeft', () => {
  it('should define R.mergeDeepLeft', () => {
    expect.assertions(1);

    expect(R.mergeDeepLeft).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mergeDeepLeft', () => {
    expect.assertions(1);
  });
});
