import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       head
 * Category:   list
 * 
 * Returns the first element of the given list or string. In some libraries
 * this function is named first.
 * 
 * 
 * ```typescript
 * R.head(['fi', 'fo', 'fum']); //=> 'fi'
 * R.head([]); //=> undefined
 * 
 * R.head('abc'); //=> 'a'
 * R.head(''); //=> ''
 * ```
 * 
 * {@see https://ramdajs.com/docs/#head}
 * {@see https://ramdajs.com/docs/#tail,
                init,
                last}
 */
describe('list.head', () => {
  it('should define R.head', () => {
    expect.assertions(1);

    expect(R.head).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.head', () => {
    expect.assertions(1);
  });
});
