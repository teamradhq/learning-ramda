import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       applySpec
 * Category:   function
 * 
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 * 
 * 
 * ```typescript
 * const getMetrics = R.applySpec({
 *   sum: R.add,
 *   nested: { mul: R.multiply }
 * });
 * getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * ```
 * 
 * {@see https://ramdajs.com/docs/#applySpec}
 * {@see https://ramdajs.com/docs/#converge,
                juxt}
 */
describe('function.applySpec', () => {
  it('should define R.applySpec', () => {
    expect.assertions(1);

    expect(R.applySpec).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.applySpec', () => {
    expect.assertions(1);
  });
});
