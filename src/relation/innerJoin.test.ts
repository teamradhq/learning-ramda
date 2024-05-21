import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       innerJoin
 * Category:   relation
 * 
 * Takes a predicate pred, a list xs, and a list ys, and returns a list
 * xs' comprising each of the elements of xs which is equal to one or more
 * elements of ys according to pred.
 * pred must be a binary function expecting an element from each list.
 * xs, ys, and xs' are treated as sets, semantically, so ordering should
 * not be significant, but since xs' is ordered the implementation guarantees
 * that its values are in the same order as they appear in xs. Duplicates are
 * not removed, so xs' may contain duplicates if xs contains duplicates.
 * 
 * 
 * ```typescript
 * R.innerJoin(
 *   (record, id) => record.id === id,
 *   [{id: 824, name: 'Richie Furay'},
 *    {id: 956, name: 'Dewey Martin'},
 *    {id: 313, name: 'Bruce Palmer'},
 *    {id: 456, name: 'Stephen Stills'},
 *    {id: 177, name: 'Neil Young'}],
 *   [177, 456, 999]
 * );
 * //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#innerJoin}
 * {@see https://ramdajs.com/docs/#intersection}
 */
describe('relation.innerJoin', () => {
  it('should define R.innerJoin', () => {
    expect.assertions(1);

    expect(R.innerJoin).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.innerJoin', () => {
    expect.assertions(1);
  });
});
