import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       isNotNil
 * Category:   type
 * 
 * Checks if the input value is not null and not undefined.
 * 
 * 
 * ```typescript
 * R.isNotNil(null); //=> false
 * R.isNotNil(undefined); //=> false
 * R.isNotNil(0); //=> true
 * R.isNotNil([]); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#isNotNil}
 */
describe('type.isNotNil', () => {
  it('should define R.isNotNil', () => {
    expect.assertions(1);

    expect(R.isNotNil).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.isNotNil', () => {
    expect.assertions(1);
  });
});
