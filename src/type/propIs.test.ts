import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       propIs
 * Category:   type
 * 
 * Returns true if the specified object property is of the given type;
 * false otherwise.
 *
 * {@see https://ramdajs.com/docs/#propIs}
 * {@see https://ramdajs.com/docs/#is,
                propSatisfies}
 */
describe('type.propIs', () => {
  it('should be a number', () => {
    expect.assertions(1);

    expect(R.propIs(Number, 'x', { x: 1, y: 2 })).toBe(true);
  });

  it('should not be a number', () => {
    expect.assertions(2);

    expect(R.propIs(Number, 'x', { x: 'foo' })).toBe(false);
    expect(R.propIs(Number, 'x', {})).toBe(false);
  });
});
