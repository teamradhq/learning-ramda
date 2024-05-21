import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       lensIndex
 * Category:   object
 * 
 * Returns a lens whose focus is the specified index.
 * 
 * 
 * ```typescript
 * const headLens = R.lensIndex(0);
 * 
 * R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 * R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 * R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#lensIndex}
 * {@see https://ramdajs.com/docs/#view,
                set,
                over,
                nth}
 */
describe('object.lensIndex', () => {
  it('should define R.lensIndex', () => {
    expect.assertions(1);

    expect(R.lensIndex).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.lensIndex', () => {
    expect.assertions(1);
  });
});
