import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       tail
 * Category:   list
 * 
 * Returns all but the first element of the given list or string (or object
 * with a tail method).
 * Dispatches to the slice method of the first argument, if present.
 * 
 * 
 * ```typescript
 * R.tail([1, 2, 3]);  //=> [2, 3]
 * R.tail([1, 2]);     //=> [2]
 * R.tail([1]);        //=> []
 * R.tail([]);         //=> []
 * 
 * R.tail('abc');  //=> 'bc'
 * R.tail('ab');   //=> 'b'
 * R.tail('a');    //=> ''
 * R.tail('');     //=> ''
 * ```
 * 
 * {@see https://ramdajs.com/docs/#tail}
 * {@see https://ramdajs.com/docs/#head,
                init,
                last}
 */
describe('list.tail', () => {
  it('should define R.tail', () => {
    expect.assertions(1);

    expect(R.tail).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.tail', () => {
    expect.assertions(1);
  });
});
