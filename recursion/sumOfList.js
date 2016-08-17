'use strict';

function sumOfListOfInt(list) {
  if (list.length === 0) return 0;
  var idx = 0;
  var total = 0;
  sum(list, idx);
  return total;

  function sum(list, idx) {
    if (idx > list.length - 1) return 0;
    total += list[idx];
    sum(list, idx + 1);
  }

}
console.log('sum of empty', sumOfListOfInt([]));
console.log('sum of 1,2,3', sumOfListOfInt([1, 2, 3]));
console.log('sum of 1,2,3,4', sumOfListOfInt([1, 2, 3, 4]));