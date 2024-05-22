import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       findLast
 * Category:   list
 *
 * Returns the last element of the list which matches the predicate, or
 * undefined if no element matches.
 * Acts as a transducer if a transformer is given in list position.
 *
 *
 * ```typescript
 * const xs = [{a: 1, b: 0}, {a:1, b: 1}];
 * R.findLast(R.propEq(1, 'a'))(xs); //=> {a: 1, b: 1}
 * R.findLast(R.propEq(4, 'a'))(xs); //=> undefined
 * ```
 *
 * {@see https://ramdajs.com/docs/#findLast}
 * {@see https://ramdajs.com/docs/#transduce}
 */
describe('list.findLast', () => {
  it('should define R.findLast', () => {
    expect.assertions(1);

    expect(R.findLast).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.findLast', () => {
    expect.assertions(1);
  });
});
