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
 * 
 * ```typescript
 * R.type({}); //=> "Object"
 * R.type(1); //=> "Number"
 * R.type(false); //=> "Boolean"
 * R.type('s'); //=> "String"
 * R.type(null); //=> "Null"
 * R.type([]); //=> "Array"
 * R.type(/[A-z]/); //=> "RegExp"
 * R.type(() => {}); //=> "Function"
 * R.type(async () => {}); //=> "AsyncFunction"
 * R.type(undefined); //=> "Undefined"
 * R.type(BigInt(123)); //=> "BigInt"
 * ```
 * 
 * {@see https://ramdajs.com/docs/#type}
 */
describe('type.type', () => {
  it('should define R.type', () => {
    expect.assertions(1);

    expect(R.type).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.type', () => {
    expect.assertions(1);
  });
});
