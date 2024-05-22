import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       move
 * Category:   list
 *
 * Move an item, at index from, to index to, in a list of elements.
 * A new list will be created containing the new elements order.
 *
 *
 * ```typescript
 * R.move(0, 2, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['b', 'c', 'a', 'd', 'e', 'f']
 * R.move(-1, 0, ['a', 'b', 'c', 'd', 'e', 'f']); //=> ['f', 'a', 'b', 'c', 'd', 'e'] list rotation
 * ```
 *
 * {@see https://ramdajs.com/docs/#move}
 */
describe('list.move', () => {
  it('should define R.move', () => {
    expect.assertions(1);

    expect(R.move).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.move', () => {
    expect.assertions(1);
  });
});
