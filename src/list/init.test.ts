import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       init
 * Category:   list
 * 
 * Returns all but the last element of the given list or string.
 * 
 * 
 * ```typescript
 * R.init([1, 2, 3]);  //=> [1, 2]
 * R.init([1, 2]);     //=> [1]
 * R.init([1]);        //=> []
 * R.init([]);         //=> []
 * 
 * R.init('abc');  //=> 'ab'
 * R.init('ab');   //=> 'a'
 * R.init('a');    //=> ''
 * R.init('');     //=> ''
 * ```
 * 
 * {@see https://ramdajs.com/docs/#init}
 * {@see https://ramdajs.com/docs/#last,
                head,
                tail}
 */
describe('list.init', () => {
  it('should define R.init', () => {
    expect.assertions(1);

    expect(R.init).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.init', () => {
    expect.assertions(1);
  });
});
