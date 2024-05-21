import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       whereEq
 * Category:   object
 * 
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in R.equals terms) as accessing that property of the
 * spec.
 * whereEq is a specialization of where.
 * 
 * 
 * ```typescript
 * // pred :: Object -> Boolean
 * const pred = R.whereEq({a: 1, b: 2});
 * 
 * pred({a: 1});              //=> false
 * pred({a: 1, b: 2});        //=> true
 * pred({a: 1, b: 2, c: 3});  //=> true
 * pred({a: 1, b: 1});        //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#whereEq}
 * {@see https://ramdajs.com/docs/#propEq,
                where}
 */
describe('object.whereEq', () => {
  it('should define R.whereEq', () => {
    expect.assertions(1);

    expect(R.whereEq).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.whereEq', () => {
    expect.assertions(1);
  });
});
