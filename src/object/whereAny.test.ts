import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       whereAny
 * Category:   object
 * 
 * Takes a spec object and a test object; each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. whereAny returns true if at least one of the predicates return true,
 * false otherwise.
 * whereAny is well suited to declaratively expressing constraints for other
 * functions such as filter and find.
 * 
 * 
 * ```typescript
 * // pred :: Object -> Boolean
 * const pred = R.whereAny({
 *   a: R.equals('foo'),
 *   b: R.complement(R.equals('xxx')),
 *   x: R.gt(R.__, 10),
 *   y: R.lt(R.__, 20)
 * });
 * 
 * pred({a: 'foo', b: 'xxx', x: 8, y: 34}); //=> true
 * pred({a: 'xxx', b: 'xxx', x: 9, y: 21}); //=> false
 * pred({a: 'bar', b: 'xxx', x: 10, y: 20}); //=> false
 * pred({a: 'foo', b: 'bar', x: 10, y: 20}); //=> true
 * pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> true
 * ```
 * 
 * {@see https://ramdajs.com/docs/#whereAny}
 * {@see https://ramdajs.com/docs/#propSatisfies,
                where}
 */
describe('object.whereAny', () => {
  it('should define R.whereAny', () => {
    expect.assertions(1);

    expect(R.whereAny).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.whereAny', () => {
    expect.assertions(1);
  });
});
