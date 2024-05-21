import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       takeLast
 * Category:   list
 * 
 * Returns a new list containing the last n elements of the given list.
 * If n > list.length, returns a list of list.length elements.
 * 
 * 
 * ```typescript
 * R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 * R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 * R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 * R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 * R.takeLast(3, 'ramda');               //=> 'mda'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#takeLast}
 * {@see https://ramdajs.com/docs/#dropLast}
 */
describe('list.takeLast', () => {
  it('should define R.takeLast', () => {
    expect.assertions(1);

    expect(R.takeLast).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.takeLast', () => {
    expect.assertions(1);
  });
});
