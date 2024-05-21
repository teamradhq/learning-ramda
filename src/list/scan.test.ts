import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       scan
 * Category:   list
 * 
 * Scan is similar to reduce, but returns a list of successively
 * reduced values from the left.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * const numbers = [1, 2, 3, 4];
 * const factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#scan}
 * {@see https://ramdajs.com/docs/#reduce,
                mapAccum}
 */
describe('list.scan', () => {
  it('should define R.scan', () => {
    expect.assertions(1);

    expect(R.scan).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.scan', () => {
    expect.assertions(1);
  });
});
