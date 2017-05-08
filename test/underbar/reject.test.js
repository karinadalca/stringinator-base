const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [1, 2, 3, 4, 5];
    const rejectedNums =  _.reject(nums, num => num % 2 === 1);
    expect(rejectedNums).toEqual([2, 4]);
  });

  it('rejects null values from an object', () => {
    const object = {
      'a': null,
      'b': 2,
      'c': null,
      'd': 4,
      'e': 5
     };
     const rejectedObject = _.reject(object, element => element === null);
     expect(rejectedObject).toEqual([2, 4, 5]);
  });
});