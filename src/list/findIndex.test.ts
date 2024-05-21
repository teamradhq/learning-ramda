import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       findIndex
 * Category:   list
 * 
 * Returns the index of the first element of the list which matches the
 * predicate, or -1 if no element matches.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const xs = [{a: 1}, {a: 2}, {a: 3}];
 * R.findIndex(R.propEq(2, 'a'))(xs); //=> 1
 * R.findIndex(R.propEq(4, 'a'))(xs); //=> -1
 * ```
 * 
 * {@see https://ramdajs.com/docs/#findIndex}
 * {@see https://ramdajs.com/docs/#transduce,
                indexOf}
 */
describe('list.findIndex', () => {
  it('should define R.findIndex', () => {
    expect.assertions(1);

    expect(R.findIndex).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.findIndex', () => {
    expect.assertions(1);
  });
});
