import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       fromPairs
 * Category:   list
 * 
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 * 
 * 
 * ```typescript
 * R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#fromPairs}
 * {@see https://ramdajs.com/docs/#toPairs,
                pair}
 */
describe('list.fromPairs', () => {
  it('should define R.fromPairs', () => {
    expect.assertions(1);

    expect(R.fromPairs).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.fromPairs', () => {
    expect.assertions(1);
  });
});
