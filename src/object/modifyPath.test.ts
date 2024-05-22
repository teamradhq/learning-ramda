import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       modifyPath
 * Category:   object
 *
 * Creates a shallow clone of the passed object by applying an fn function
 * to the value at the given path.
 * The function will not be invoked, and the object will not change
 * if its corresponding path does not exist in the object.
 * All non-primitive properties are copied to the new object by reference.
 *
 *
 * ```typescript
 * const person = {name: 'James', address: { zipCode: '90216' }};
 * R.modifyPath(['address', 'zipCode'], R.reverse, person); //=> {name: 'James', address: { zipCode: '61209' }}
 *
 * // Can handle arrays too
 * const person = {name: 'James', addresses: [{ zipCode: '90216' }]};
 * R.modifyPath(['addresses', 0, 'zipCode'], R.reverse, person); //=> {name: 'James', addresses: [{ zipCode: '61209' }]}
 * ```
 *
 * {@see https://ramdajs.com/docs/#modifyPath}
 */
describe('object.modifyPath', () => {
  it('should define R.modifyPath', () => {
    expect.assertions(1);

    expect(R.modifyPath).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.modifyPath', () => {
    expect.assertions(1);
  });
});
