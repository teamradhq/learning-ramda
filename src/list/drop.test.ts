import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       drop
 * Category:   list
 * 
 * Returns all but the first n elements of the given list, string, or
 * transducer/transformer (or object with a drop method).
 * Dispatches to the drop method of the second argument, if present.
 * 
 * 
 * ```typescript
 * R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 * R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 * R.drop(3, ['foo', 'bar', 'baz']); //=> []
 * R.drop(4, ['foo', 'bar', 'baz']); //=> []
 * R.drop(3, 'ramda');               //=> 'da'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#drop}
 * {@see https://ramdajs.com/docs/#take,
                transduce,
                dropLast,
                dropWhile}
 */
describe('list.drop', () => {
  it('should define R.drop', () => {
    expect.assertions(1);

    expect(R.drop).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.drop', () => {
    expect.assertions(1);
  });
});
