const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [1, 2, 3, 4, 5];
    const filteredNums = _.filter(nums, num => num % 2 === 1);
    expect(filteredNums).toEqual([1,3,5]);
  });

  it('filters an object to only numeric values', () => {
    const object = {
      'a': 1,
      'b': 'hello',
      'c': 3,
      'd': 'not a number',
      'e': 5
     };
     const filteredObject = _.filter(object, element => !isNaN(element));
     expect(filteredObject).toEqual([1,3,5]);
  });
});