import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       append
 * Category:   list
 *
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 *
 * ```typescript
 * R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 * R.append('tests', []); //=> ['tests']
 * R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 * ```
 *
 * {@see https://ramdajs.com/docs/#append}
 * {@see https://ramdajs.com/docs/#prepend}
 */
describe('list.append', () => {
  it('should define R.append', () => {
    expect.assertions(1);

    expect(R.append).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.append', () => {
    expect.assertions(1);
  });
});
