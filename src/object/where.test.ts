import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       where
 * Category:   object
 * 
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. where returns true if all the predicates return true, false
 * otherwise.
 * where is well suited to declaratively expressing constraints for other
 * functions such as filter and find.
 * 
 * 
 * ```typescript
 * // pred :: Object -> Boolean
 * const pred = R.where({
 *   a: R.equals('foo'),
 *   b: R.complement(R.equals('bar')),
 *   x: R.gt(R.__, 10),
 *   y: R.lt(R.__, 20)
 * });
 * 
 * pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 * pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 * pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 * pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 * pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#where}
 * {@see https://ramdajs.com/docs/#propSatisfies,
                whereEq}
 */
describe('object.where', () => {
  it('should define R.where', () => {
    expect.assertions(1);

    expect(R.where).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.where', () => {
    expect.assertions(1);
  });
});
