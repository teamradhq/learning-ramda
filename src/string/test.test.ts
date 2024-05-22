import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       test
 * Category:   string
 *
 * Determines whether a given string matches a given regular expression.
 *
 *
 * ```typescript
 * R.test(/^x/, 'xyz'); //=> true
 * R.test(/^y/, 'xyz'); //=> false
 * ```
 *
 * {@see https://ramdajs.com/docs/#test}
 * {@see https://ramdajs.com/docs/#match}
 */
describe('string.test', () => {
  it('should define R.test', () => {
    expect.assertions(1);

    expect(R.test).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.test', () => {
    expect.assertions(1);
  });
});
