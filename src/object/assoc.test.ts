import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       assoc
 * Category:   object
 * 
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 * 
 * 
 * ```typescript
 * R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#assoc}
 * {@see https://ramdajs.com/docs/#dissoc,
                pick}
 */
describe('object.assoc', () => {
  it('should define R.assoc', () => {
    expect.assertions(1);

    expect(R.assoc).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.assoc', () => {
    expect.assertions(1);
  });
});
