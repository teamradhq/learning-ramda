import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       uniqWith
 * Category:   list
 *
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 * Acts as a transducer if a transformer is given in list position.
 *
 *
 * ```typescript
 * const strEq = R.eqBy(String);
 * R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 * R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 * R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 * R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 * ```
 *
 * {@see https://ramdajs.com/docs/#uniqWith}
 */
describe('list.uniqWith', () => {
  it('should define R.uniqWith', () => {
    expect.assertions(1);

    expect(R.uniqWith).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.uniqWith', () => {
    expect.assertions(1);
  });
});
