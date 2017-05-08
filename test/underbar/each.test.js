const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const array = [1, 2, 3, 4, 5];
    let count = 0;
    _.each(array, function(element, index, array) {
      expect(element).toEqual(array[index]);
      count += 1;
    });
    expect(count).toBe(5);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
     const object = {
      'a': 1,
      'b': 2,
      'c': 3,
      'd': 4,
      'e': 5
     };
    let count = 0;
    _.each(object, function(element, index, object) {
      expect(element).toEqual(object[index]);
      count += 1;
    });
    expect(count).toBe(5);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
     const object = {
      'Name': 'Batman',
      'Age': 'Unknonw',
      'city': 'Gotham'
    };
    let count = 0;
    _.each(object, function(element, key, object) {
      expect(element).toEqual(object[key]);
      count += 1;
    });
    expect(count).toBe(3);
  });
});

