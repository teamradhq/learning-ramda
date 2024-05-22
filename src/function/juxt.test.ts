import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       juxt
 * Category:   function
 *
 * juxt applies a list of functions to a list of values.
 *
 *
 * ```typescript
 * const getRange = R.juxt([Math.min, Math.max]);
 * getRange(3, 4, 9, -3); //=> [-3, 9]
 * ```
 *
 * {@see https://ramdajs.com/docs/#juxt}
 * {@see https://ramdajs.com/docs/#applySpec}
 */
describe('function.juxt', () => {
  it('should define R.juxt', () => {
    expect.assertions(1);

    expect(R.juxt).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.juxt', () => {
    expect.assertions(1);
  });
});
