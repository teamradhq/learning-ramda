import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       pickBy
 * Category:   object
 * 
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 * 
 * 
 * ```typescript
 * const isUpperCase = (val, key) => key.toUpperCase() === key;
 * R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#pickBy}
 * {@see https://ramdajs.com/docs/#pick,
                filter}
 */
describe('object.pickBy', () => {
  it('should define R.pickBy', () => {
    expect.assertions(1);

    expect(R.pickBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.pickBy', () => {
    expect.assertions(1);
  });
});
