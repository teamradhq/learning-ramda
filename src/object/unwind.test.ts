import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       unwind
 * Category:   object
 * 
 * Deconstructs an array field from the input documents to output a document for each element.
 * Each output document is the input document with the value of the array field replaced by the element.
 * 
 * 
 * ```typescript
 * R.unwind('hobbies', {
 *   name: 'alice',
 *   hobbies: ['Golf', 'Hacking'],
 *   colors: ['red', 'green'],
 * });
 * // [
 * //   { name: 'alice', hobbies: 'Golf', colors: ['red', 'green'] },
 * //   { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green'] }
 * // ]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#unwind}
 */
describe('object.unwind', () => {
  it('should define R.unwind', () => {
    expect.assertions(1);

    expect(R.unwind).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.unwind', () => {
    expect.assertions(1);
  });
});
