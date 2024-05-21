import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       objOf
 * Category:   object
 * 
 * Creates an object containing a single key:value pair.
 * 
 * 
 * ```typescript
 * const matchPhrases = R.compose(
 *   R.objOf('must'),
 *   R.map(R.objOf('match_phrase'))
 * );
 * matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 * ```
 * 
 * {@see https://ramdajs.com/docs/#objOf}
 * {@see https://ramdajs.com/docs/#pair}
 */
describe('object.objOf', () => {
  it('should define R.objOf', () => {
    expect.assertions(1);

    expect(R.objOf).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.objOf', () => {
    expect.assertions(1);
  });
});
