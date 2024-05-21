import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       over
 * Category:   object
 * 
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 * 
 * 
 * ```typescript
 * const headLens = R.lensIndex(0);
 * 
 * R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#over}
 * {@see https://ramdajs.com/docs/#view,
                set,
                lens,
                lensIndex,
                lensProp,
                lensPath}
 */
describe('object.over', () => {
  it('should define R.over', () => {
    expect.assertions(1);

    expect(R.over).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.over', () => {
    expect.assertions(1);
  });
});
