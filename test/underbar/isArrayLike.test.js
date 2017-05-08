const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
   const array = [1,2,3,4,5];
   expect(_.isArrayLike(array)).toEqual(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObject = {
      'length': 10
    };
    expect(_.isArrayLike(arrayLikeObject)).toEqual(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObject = {
      'Name': 'Batman',
      'Age': 'Unknonw',
      'city': 'Gotham'
    };
    expect(_.isArrayLike(nonArrayLikeObject)).toEqual(false);
  });
});
