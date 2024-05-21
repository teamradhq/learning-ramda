import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       countBy
 * Category:   relation
 * 
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by fn to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 * R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 * 
 * const letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 * R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#countBy}
 */
describe('relation.countBy', () => {
  it('should define R.countBy', () => {
    expect.assertions(1);

    expect(R.countBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.countBy', () => {
    expect.assertions(1);
  });
});
