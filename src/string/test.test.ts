import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       test
 * Category:   string
 *
 * Determines whether a given string matches a given regular expression.
 *
 * {@see https://ramdajs.com/docs/#test}
 * {@see https://ramdajs.com/docs/#match}
 */
describe('string.test', () => {
  it('should pass the test', () => {
    expect.assertions(1);

    expect(R.test(/^x/, 'xyz')).toBe(true);
  });

  it('should fail the test', () => {
    expect.assertions(1);

    expect(R.test(/^y/, 'xyz')).toBe(false);
  });
});
