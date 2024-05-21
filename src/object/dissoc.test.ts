import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       dissoc
 * Category:   object
 * 
 * Returns a new object that does not contain a prop property.
 * 
 * 
 * ```typescript
 * R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#dissoc}
 * {@see https://ramdajs.com/docs/#assoc,
                omit}
 */
describe('object.dissoc', () => {
  it('should define R.dissoc', () => {
    expect.assertions(1);

    expect(R.dissoc).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.dissoc', () => {
    expect.assertions(1);
  });
});
