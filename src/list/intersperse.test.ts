import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       intersperse
 * Category:   list
 * 
 * Creates a new list with the separator interposed between elements.
 * Dispatches to the intersperse method of the second argument, if present.
 * 
 * 
 * ```typescript
 * R.intersperse('a', ['b', 'n', 'n', 's']); //=> ['b', 'a', 'n', 'a', 'n', 'a', 's']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#intersperse}
 */
describe('list.intersperse', () => {
  it('should define R.intersperse', () => {
    expect.assertions(1);

    expect(R.intersperse).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.intersperse', () => {
    expect.assertions(1);
  });
});
