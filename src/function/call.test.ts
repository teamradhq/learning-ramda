import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       call
 * Category:   function
 *
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * R.converge: the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 *
 * ```typescript
 * R.call(R.add, 1, 2); //=> 3
 *
 * const indentN = R.pipe(
 *   R.repeat(' '),
 *   R.join(''),
 *   R.replace(/^(?!$)/gm)
 * );
 *
 * const format = R.converge(
 *   R.call,
 *   [
 *     R.pipe(R.prop('indent'), indentN),
 *     R.prop('value')
 *   ]
 * );
 *
 * format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * ```
 *
 * {@see https://ramdajs.com/docs/#call}
 * {@see https://ramdajs.com/docs/#apply}
 */
describe('function.call', () => {
  it('should define R.call', () => {
    expect.assertions(1);

    expect(R.call).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.call', () => {
    expect.assertions(1);
  });
});
