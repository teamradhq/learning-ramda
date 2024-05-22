import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       isNotEmpty
 * Category:   logic
 *
 * Returns false if the given value is its type's empty value; true
 * otherwise.
 *
 * {@see https://ramdajs.com/docs/#isNotEmpty}
 * {@see https://ramdajs.com/docs/#empty}
 * {@see https://ramdajs.com/docs/#isEmpty}
 */
describe('logic.isNotEmpty', () => {
  const notEmptyCases: [null | number[] | { length: number }][] = [
    [[1, 2, 3]],
    [null],
    [{ length: 0 }],
  ];
  it.each(notEmptyCases)('should be notEmpty for %s', (input) => {
    expect.assertions(1);

    expect(R.isNotEmpty(input)).toBe(true);
  });

  const emptyCases: [null | number[] | object | string | Uint8Array][] = [
    [[]],
    [''],
    [{}],
    [Uint8Array.from([])],
  ];
  it.each(emptyCases)('should not be notEmpty for %s', (input) => {
    expect.assertions(1);

    expect(R.isNotEmpty(input)).toBe(false);
  });
});
