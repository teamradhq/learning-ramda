import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       max
 * Category:   relation
 * 
 * Returns the larger of its two arguments.
 * 
 * 
 * ```typescript
 * R.max(789, 123); //=> 789
 * R.max('a', 'b'); //=> 'b'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#max}
 * {@see https://ramdajs.com/docs/#maxBy,
                min}
 */
describe('relation.max', () => {
  it('should define R.max', () => {
    expect.assertions(1);

    expect(R.max).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.max', () => {
    expect.assertions(1);
  });
});
