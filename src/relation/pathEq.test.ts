import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       pathEq
 * Category:   relation
 * 
 * Determines whether a nested path on an object has a specific value, in
 * R.equals terms. Most likely used to filter a list.
 * 
 * 
 * ```typescript
 * const user1 = { address: { zipCode: 90210 } };
 * const user2 = { address: { zipCode: 55555 } };
 * const user3 = { name: 'Bob' };
 * const users = [ user1, user2, user3 ];
 * const isFamous = R.pathEq(90210, ['address', 'zipCode']);
 * R.filter(isFamous, users); //=> [ user1 ]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#pathEq}
 * {@see https://ramdajs.com/docs/#whereEq,
                propEq,
                pathSatisfies,
                equals}
 */
describe('relation.pathEq', () => {
  it('should define R.pathEq', () => {
    expect.assertions(1);

    expect(R.pathEq).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.pathEq', () => {
    expect.assertions(1);
  });
});
