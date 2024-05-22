import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       reverse
 * Category:   list
 *
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 *
 * ```typescript
 * R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 * R.reverse([1, 2]);     //=> [2, 1]
 * R.reverse([1]);        //=> [1]
 * R.reverse([]);         //=> []
 *
 * R.reverse('abc');      //=> 'cba'
 * R.reverse('ab');       //=> 'ba'
 * R.reverse('a');        //=> 'a'
 * R.reverse('');         //=> ''
 * ```
 *
 * {@see https://ramdajs.com/docs/#reverse}
 */
describe('list.reverse', () => {
  it('should define R.reverse', () => {
    expect.assertions(1);

    expect(R.reverse).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.reverse', () => {
    expect.assertions(1);
  });
});
