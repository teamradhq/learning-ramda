import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       take
 * Category:   list
 * 
 * Returns the first n elements of the given list, string, or
 * transducer/transformer (or object with a take method).
 * Dispatches to the take method of the second argument, if present.
 * 
 * 
 * ```typescript
 * R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 * R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 * R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 * R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 * R.take(3, 'ramda');               //=> 'ram'
 * 
 * const personnel = [
 *   'Dave Brubeck',
 *   'Paul Desmond',
 *   'Eugene Wright',
 *   'Joe Morello',
 *   'Gerry Mulligan',
 *   'Bob Bates',
 *   'Joe Dodge',
 *   'Ron Crotty'
 * ];
 * 
 * const takeFive = R.take(5);
 * takeFive(personnel);
 * //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * ```
 * 
 * {@see https://ramdajs.com/docs/#take}
 * {@see https://ramdajs.com/docs/#drop}
 */
describe('list.take', () => {
  it('should define R.take', () => {
    expect.assertions(1);

    expect(R.take).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.take', () => {
    expect.assertions(1);
  });
});
