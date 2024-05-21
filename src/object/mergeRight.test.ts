import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       mergeRight
 * Category:   object
 * 
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 * 
 * 
 * ```typescript
 * R.mergeRight({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 * //=> { 'name': 'fred', 'age': 40 }
 * 
 * const withDefaults = R.mergeRight({x: 0, y: 0});
 * withDefaults({y: 2}); //=> {x: 0, y: 2}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#mergeRight}
 * {@see https://ramdajs.com/docs/#mergeLeft,
                mergeDeepRight,
                mergeWith,
                mergeWithKey}
 */
describe('object.mergeRight', () => {
  it('should define R.mergeRight', () => {
    expect.assertions(1);

    expect(R.mergeRight).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.mergeRight', () => {
    expect.assertions(1);
  });
});
