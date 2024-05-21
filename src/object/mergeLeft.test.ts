import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mergeLeft
 * Category:   object
 * 
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the first object will be used.
 * 
 * 
 * ```typescript
 * R.mergeLeft({ 'age': 40 }, { 'name': 'fred', 'age': 10 });
 * //=> { 'name': 'fred', 'age': 40 }
 * 
 * const resetToDefault = R.mergeLeft({x: 0});
 * resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mergeLeft}
 * {@see https://ramdajs.com/docs/#mergeRight,
                mergeDeepLeft,
                mergeWith,
                mergeWithKey}
 */
describe('object.mergeLeft', () => {
  it('should define R.mergeLeft', () => {
    expect.assertions(1);

    expect(R.mergeLeft).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mergeLeft', () => {
    expect.assertions(1);
  });
});
