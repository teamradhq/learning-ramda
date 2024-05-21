import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       pathOr
 * Category:   object
 * 
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 * 
 * 
 * ```typescript
 * R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 * R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 * ```
 * 
 * {@see https://ramdajs.com/docs/#pathOr}
 */
describe('object.pathOr', () => {
  it('should define R.pathOr', () => {
    expect.assertions(1);

    expect(R.pathOr).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.pathOr', () => {
    expect.assertions(1);
  });
});
