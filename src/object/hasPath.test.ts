import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       hasPath
 * Category:   object
 *
 * Returns whether or not a path exists in an object. Only the object's
 * own properties are checked.
 *
 *
 * ```typescript
 * R.hasPath(['a', 'b'], {a: {b: 2}});         // => true
 * R.hasPath(['a', 'b'], {a: {b: undefined}}); // => true
 * R.hasPath(['a', 'b'], {a: {c: 2}});         // => false
 * R.hasPath(['a', 'b'], {});                  // => false
 * ```
 *
 * {@see https://ramdajs.com/docs/#hasPath}
 * {@see https://ramdajs.com/docs/#has}
 */
describe('object.hasPath', () => {
  it('should define R.hasPath', () => {
    expect.assertions(1);

    expect(R.hasPath).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.hasPath', () => {
    expect.assertions(1);
  });
});
