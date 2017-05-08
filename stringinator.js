const _ = require('./underbar');

const first = function(str, n) {
  const arr = str.split('');
  let result = _.first(arr, n);
  return result.length < 2 ? result : result.join('');
};

const last = function(str, n) {
  const arr = str.split('');
  let result = _.last(arr, n);
  return result.length < 2 ? result : result.join('');
};

const removeChar = function(str, target) {
  const arr = str.split('');
  let result = _.reject(arr, element => element === target);
  return result.join('');
};

const hasChar = function(str, target) {
  const arr = str.split('');
  let result = _.some(arr, element => element === target);
  return result.join('');
};

const isOnlyDigits = function(str) {
  const arr = str.split('');
  let result = _.every(arr, element => !isNaN(element));
  return result;
};

const filterToOnlyDigits = function(str) {
  const arr = str.split('');
  let result = _.filter(arr, element => !isNaN(element));
  for(let index in result) {
    if (result[index] === " "){
      return '';
    }
  }
  return result.join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  let result = _.map(obj, value => truncateString(value, maxLength));
  return result;
};

const countChars = function(str) {
  const arr = str.split('');
  let result = {};
  for(let x in arr) {
    if (!result.hasOwnProperty(arr[x])) {
      result[arr[x]] = 1;
    } else {
      result[arr[x]]++;
    }
  }
  return result;
};

const dedup = function(str) {
  const arr = str.split('');
  let result = _.uniq(arr);
  return result.join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};