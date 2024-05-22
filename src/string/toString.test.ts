import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       toString
 * Category:   string
 *
 * Returns the string representation of the given value. eval'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * toString methods do not satisfy this requirement.
 *
 * If the given value is an [object Object] with a toString method other
 * than Object.prototype.toString, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable toString method.
 *
 * {@see https://ramdajs.com/docs/#toString}
 */
describe('string.toString', () => {
  const cases = [
    [42, '42'],
    ['abc', '"abc"'],
    [[1, 2, 3], '[1, 2, 3]'],
    [{ foo: 1, bar: 2, baz: 3 }, '{"bar": 2, "baz": 3, "foo": 1}'],
    [new Date('2001-02-03T04:05:06Z'), 'new Date("2001-02-03T04:05:06.000Z")'],
  ] as const;

  // @ts-expect-error - Case arguments are not assignable to parameters.
  it.each(cases)('should cast %s to %s', (input, expected) => {
    expect.assertions(1);

    expect(R.toString(input)).toBe(expected);
  });
});
