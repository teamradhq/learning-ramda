import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       defaultTo
 * Category:   logic
 * 
 * Returns the second argument if it is not null, undefined or NaN;
 * otherwise the first argument is returned.
 * 
 * 
 * ```typescript
 * const defaultTo42 = R.defaultTo(42);
 * 
 * defaultTo42(null);  //=> 42
 * defaultTo42(undefined);  //=> 42
 * defaultTo42(false);  //=> false
 * defaultTo42('Ramda');  //=> 'Ramda'
 * // parseInt('string') results in NaN
 * defaultTo42(parseInt('string')); //=> 42
 * ```
 * 
 * {@see https://ramdajs.com/docs/#defaultTo}
 */
describe('logic.defaultTo', () => {
  it('should define R.defaultTo', () => {
    expect.assertions(1);

    expect(R.defaultTo).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.defaultTo', () => {
    expect.assertions(1);
  });
});
