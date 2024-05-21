import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       dropLast
 * Category:   list
 * 
 * Returns a list containing all but the last n elements of the given list.
 * Acts as a transducer if a transformer is given in list position.
 * 
 * 
 * ```typescript
 * R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 * R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 * R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 * R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 * R.dropLast(3, 'ramda');               //=> 'ra'
 * ```
 * 
 * {@see https://ramdajs.com/docs/#dropLast}
 * {@see https://ramdajs.com/docs/#takeLast,
                drop,
                dropWhile,
                dropLastWhile}
 */
describe('list.dropLast', () => {
  it('should define R.dropLast', () => {
    expect.assertions(1);

    expect(R.dropLast).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.dropLast', () => {
    expect.assertions(1);
  });
});
