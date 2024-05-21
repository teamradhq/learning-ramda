import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       collectBy
 * Category:   list
 * 
 * Splits a list into sub-lists, based on the result of calling a key-returning function on each element,
 * and grouping the results according to values returned.
 * 
 * 
 * ```typescript
 * R.collectBy(R.prop('type'), [
 *   {type: 'breakfast', item: '☕️'},
 *   {type: 'lunch', item: '🌯'},
 *   {type: 'dinner', item: '🍝'},
 *   {type: 'breakfast', item: '🥐'},
 *   {type: 'lunch', item: '🍕'}
 * ]);
 * 
 * // [ [ {type: 'breakfast', item: '☕️'},
 * //     {type: 'breakfast', item: '🥐'} ],
 * //   [ {type: 'lunch', item: '🌯'},
 * //     {type: 'lunch', item: '🍕'} ],
 * //   [ {type: 'dinner', item: '🍝'} ] ]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#collectBy}
 * {@see https://ramdajs.com/docs/#groupBy,
                partition}
 */
describe('list.collectBy', () => {
  it('should define R.collectBy', () => {
    expect.assertions(1);

    expect(R.collectBy).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.collectBy', () => {
    expect.assertions(1);
  });
});
