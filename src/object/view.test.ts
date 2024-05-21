import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       view
 * Category:   object
 * 
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 * 
 * 
 * ```typescript
 * const xLens = R.lensProp('x');
 * 
 * R.view(xLens, {x: 1, y: 2});  //=> 1
 * R.view(xLens, {x: 4, y: 2});  //=> 4
 * ```
 * 
 * {@see https://ramdajs.com/docs/#view}
 * {@see https://ramdajs.com/docs/#set,
                over,
                lens,
                lensIndex,
                lensProp,
                lensPath}
 */
describe('object.view', () => {
  it('should define R.view', () => {
    expect.assertions(1);

    expect(R.view).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.view', () => {
    expect.assertions(1);
  });
});
