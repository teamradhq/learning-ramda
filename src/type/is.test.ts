// noinspection JSPrimitiveTypeWrapperUsage

import { describe, expect, it } from '@jest/globals';
import * as R from 'ramda';

/**
 * Name:       is
 * Category:   type
 *
 * See if an object (i.e. val) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 * If val was created using Object.create, R.is(Object, val) === true.
 *
 * {@see https://ramdajs.com/docs/#is}
 */
describe('type.is', () => {
  const trueCases: [ObjectConstructor | NumberConstructor | StringConstructor, unknown, boolean][] =
    [
      [Object, {}, true],
      [Number, 1, true],
      [String, 's', true],
      [String, new String('.'), true],
      [Object, new String('.'), true],
    ];

  it.each(trueCases)('should be true that %s is %s', (type, value, expected) => {
    expect.assertions(1);

    expect(R.is(type, value)).toStrictEqual(expected);
  });

  const falseCases: [
    ObjectConstructor | NumberConstructor | StringConstructor,
    unknown,
    boolean,
  ][] = [
    [Object, 1, false],
    [Object, 's', false],
    [Number, {}, false],
  ];

  it.each(falseCases)('should be false that %s is %s', (type, value, expected) => {
    expect.assertions(1);

    expect(R.is(type, value)).toStrictEqual(expected);
  });
});
