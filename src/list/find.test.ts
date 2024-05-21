import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       find
 * Category:   list
 * 
 * Returns the first element of the list which matches the predicate, or
 * undefined if no element matches.
 * Dispatches to the find method of the second argument, if present.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const xs = [{a: 1}, {a: 2}, {a: 3}];
 * R.find(R.propEq(2, 'a'))(xs); //=> {a: 2}
 * R.find(R.propEq(4, 'a'))(xs); //=> undefined
 * ```
 * 
 * {@see https://ramdajs.com/docs/#find}
 * {@see https://ramdajs.com/docs/#transduce}
 */
describe('list.find', () => {
  it('should define R.find', () => {
    expect.assertions(1);

    expect(R.find).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.find', () => {
    expect.assertions(1);
  });
});
