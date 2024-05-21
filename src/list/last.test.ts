import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       last
 * Category:   list
 * 
 * Returns the last element of the given list or string.
 * 
 * 
 * ```typescript
 * R.last(['fi', 'fo', 'fum']); //=> 'fum'
 * R.last([]); //=> undefined
 * 
 * R.last('abc'); //=> 'c'
 * R.last(''); //=> ''
 * ```
 * 
 * {@see https://ramdajs.com/docs/#last}
 * {@see https://ramdajs.com/docs/#init,
                head,
                tail}
 */
describe('list.last', () => {
  it('should define R.last', () => {
    expect.assertions(1);

    expect(R.last).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.last', () => {
    expect.assertions(1);
  });
});
