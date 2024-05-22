import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       pickAll
 * Category:   object
 *
 * Similar to pick except that this one includes a key: undefined pair for
 * properties that don't exist.
 *
 *
 * ```typescript
 * R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 * R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 * ```
 *
 * {@see https://ramdajs.com/docs/#pickAll}
 * {@see https://ramdajs.com/docs/#pick}
 */
describe('object.pickAll', () => {
  it('should define R.pickAll', () => {
    expect.assertions(1);

    expect(R.pickAll).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.pickAll', () => {
    expect.assertions(1);
  });
});
