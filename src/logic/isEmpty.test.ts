import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       isEmpty
 * Category:   logic
 *
 * Returns true if the given value is its type's empty value; false
 * otherwise.
 *
 * {@see https://ramdajs.com/docs/#isEmpty}
 * {@see https://ramdajs.com/docs/#empty}
 * {@see https://ramdajs.com/docs/#isNotEmpty}
 */
describe('logic.isEmpty', () => {
  const notEmptyCases: [null | number[] | { length: number }][] = [
    [[1, 2, 3]],
    [null],
    [{ length: 0 }],
  ];
  it.each(notEmptyCases)('should not be empty for %s', (input) => {
    expect.assertions(1);

    expect(R.isEmpty(input)).toBe(false);
  });

  const emptyCases: [null | number[] | object | string | Uint8Array][] = [
    [[]],
    [''],
    [{}],
    [Uint8Array.from([])],
  ];

  it.each(emptyCases)('should be empty for %s', (input) => {
    expect.assertions(1);

    expect(R.isEmpty(input)).toBe(true);
  });
});
