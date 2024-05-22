import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       bind
 * Category:   function
 *
 * Creates a function that is bound to a context.
 * Note: R.bind does not provide the additional argument-binding capabilities of
 * Function.prototype.bind.
 *
 *
 * ```typescript
 * const log = R.bind(console.log, console);
 * R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 * // logs {a: 2}
 * ```
 *
 * {@see https://ramdajs.com/docs/#bind}
 * {@see https://ramdajs.com/docs/#partial}
 */
describe('function.bind', () => {
  it('should define R.bind', () => {
    expect.assertions(1);

    expect(R.bind).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.bind', () => {
    expect.assertions(1);
  });
});
