import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/** 
 * Name:       propEq
 * Category:   relation
 * 
 * Returns true if the specified object property is equal, in
 * R.equals terms, to the given value; false otherwise.
 * You can test multiple properties with R.whereEq,
 * and test nested path property with R.pathEq.
 * 
 * 
 * ```typescript
 * const abby = {name: 'Abby', age: 7, hair: 'blond'};
 * const fred = {name: 'Fred', age: 12, hair: 'brown'};
 * const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 * const alois = {name: 'Alois', age: 15, disposition: 'surly'};
 * const kids = [abby, fred, rusty, alois];
 * const hasBrownHair = R.propEq('brown', 'hair');
 * R.filter(hasBrownHair, kids); //=> [fred, rusty]
 * ```
 * 
 * {@see https://ramdajs.com/docs/#propEq}
 * {@see https://ramdajs.com/docs/#whereEq,
                pathEq,
                propSatisfies,
                equals}
 */
describe('relation.propEq', () => {
  it('should define R.propEq', () => {
    expect.assertions(1);

    expect(R.propEq).toBeDefined();
  });

  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('should demonstrate how to use R.propEq', () => {
    expect.assertions(1);
  });
});
