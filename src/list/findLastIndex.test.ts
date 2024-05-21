import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       findLastIndex
 * Category:   list
 * 
 * Returns the index of the last element of the list which matches the
 * predicate, or -1 if no element matches.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 * R.findLastIndex(R.propEq(1, 'a'))(xs); //=> 1
 * R.findLastIndex(R.propEq(4, 'a'))(xs); //=> -1
 * ```
 * 
 * {@see https://ramdajs.com/docs/#findLastIndex}
 * {@see https://ramdajs.com/docs/#transduce,
                lastIndexOf}
 */
describe('list.findLastIndex', () => {
  it('should define R.findLastIndex', () => {
    expect.assertions(1);

    expect(R.findLastIndex).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.findLastIndex', () => {
    expect.assertions(1);
  });
});
