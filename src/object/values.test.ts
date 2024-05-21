import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       values
 * Category:   object
 * 
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 * 
 * 
 * ```typescript
 * R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#values}
 * {@see https://ramdajs.com/docs/#valuesIn,
                keys,
                toPairs}
 */
describe('object.values', () => {
  it('should define R.values', () => {
    expect.assertions(1);

    expect(R.values).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.values', () => {
    expect.assertions(1);
  });
});
