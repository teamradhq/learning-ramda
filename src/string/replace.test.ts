import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       replace
 * Category:   string
 *
 * Replace a substring or regex match in a string with a replacement.
 * The first two parameters correspond to the parameters of the
 * String.prototype.replace() function, so the second parameter can also be a
 * function.
 *
 *
 * ```typescript
 * R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 * R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 * // Use the "g" (global) flag to replace all occurrences:
 * R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 * ```
 *
 * {@see https://ramdajs.com/docs/#replace}
 */
describe('string.replace', () => {
  it('should define R.replace', () => {
    expect.assertions(1);

    expect(R.replace).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.replace', () => {
    expect.assertions(1);
  });
});
