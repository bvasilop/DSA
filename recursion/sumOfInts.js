'use strict';

function sumOfInts(sum, listOfInts) {
  let intMap = {};

  let result = [];
  listOfInts.forEach(function(item) {
    intMap[item] = true;
  });
  listOfInts.forEach(function(item) {
    if (intMap[sum - item] === true) {
      result.push([item, (sum - item)]);
    }
  });
  return result;
}
console.log('sumOfInts(8,[3,4,5,4,3])', sumOfInts(8, [3, 4, 5, 4, 3]));