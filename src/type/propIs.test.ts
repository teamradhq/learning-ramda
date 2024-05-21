import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       propIs
 * Category:   type
 * 
 * Returns true if the specified object property is of the given type;
 * false otherwise.
 * 
 * 
 * ```typescript
 * R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 * R.propIs(Number, 'x', {x: 'foo'});    //=> false
 * R.propIs(Number, 'x', {});            //=> false
 * ```
 * 
 * {@see https://ramdajs.com/docs/#propIs}
 * {@see https://ramdajs.com/docs/#is,
                propSatisfies}
 */
describe('type.propIs', () => {
  it('should define R.propIs', () => {
    expect.assertions(1);

    expect(R.propIs).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.propIs', () => {
    expect.assertions(1);
  });
});
