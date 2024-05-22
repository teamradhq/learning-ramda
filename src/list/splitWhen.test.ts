import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       splitWhen
 * Category:   list
 *
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 * the result of concatenating the two output lists is equivalent to the input list;
 * none of the elements of the first output list satisfies the predicate; and
 * if the second output list is non-empty, its first element satisfies the predicate.
 *
 *
 *
 * ```typescript
 * R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 * ```
 *
 * {@see https://ramdajs.com/docs/#splitWhen}
 */
describe('list.splitWhen', () => {
  it('should define R.splitWhen', () => {
    expect.assertions(1);

    expect(R.splitWhen).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.splitWhen', () => {
    expect.assertions(1);
  });
});
