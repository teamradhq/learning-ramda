import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       type
 * Category:   type
 *
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * {@see https://ramdajs.com/docs/#type}
 */
describe('type.type', () => {
  const cases: [unknown, string][] = [
    [{}, 'Object'],
    [1, 'Number'],
    [false, 'Boolean'],
    ['s', 'String'],
    [null, 'Null'],
    [[], 'Array'],
    [/[A-z]/, 'RegExp'],
    [() => {}, 'Function'],
    [async () => {}, 'AsyncFunction'],
    [undefined, 'Undefined'],
    [BigInt(123), 'BigInt'],
  ];
  it.each(cases)('should show %s type as %s', () => {
    expect.assertions(1);

    expect(R.type).toBeDefined();
  });
});
