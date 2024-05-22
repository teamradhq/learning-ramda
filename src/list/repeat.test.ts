import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       repeat
 * Category:   list
 *
 * Returns a fixed list of size n containing a specified identical value.
 *
 *
 * ```typescript
 * R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 * const obj = {};
 * const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 * repeatedObjs[0] === repeatedObjs[1]; //=> true
 * ```
 *
 * {@see https://ramdajs.com/docs/#repeat}
 * {@see https://ramdajs.com/docs/#times}
 */
describe('list.repeat', () => {
  it('should define R.repeat', () => {
    expect.assertions(1);

    expect(R.repeat).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.repeat', () => {
    expect.assertions(1);
  });
});
