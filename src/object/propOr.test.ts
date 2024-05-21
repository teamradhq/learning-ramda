import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       propOr
 * Category:   object
 * 
 * Return the specified property of the given non-null object if the property
 * is present and it's value is not null, undefined or NaN.
 * Otherwise the first argument is returned.
 * 
 * 
 * ```typescript
 * const alice = {
 *   name: 'ALICE',
 *   age: 101
 * };
 * const favorite = R.prop('favoriteLibrary');
 * const favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 * 
 * favorite(alice);  //=> undefined
 * favoriteWithDefault(alice);  //=> 'Ramda'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#propOr}
 */
describe('object.propOr', () => {
  it('should define R.propOr', () => {
    expect.assertions(1);

    expect(R.propOr).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.propOr', () => {
    expect.assertions(1);
  });
});
