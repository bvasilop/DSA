'use strict';

const arrSorted = [1, 2, 3, 4, 5, 6, 7];

//O(log n + 1)
function findLocation(arrSorted, searchVal) {
  let left = 0;
  let right = arrSorted.length - 1;
  let middle, middleVal;
  console.log('LR', left, right);
  while (left <= right) { //keep looking until the end points are equal or swap position
    if (left > right) return -1;
    middle = (left + right) / 2 | 0; //find the middle of the current end points
    middleVal = arrSorted[middle];
    if (middleVal < searchVal) {
      left = middle + 1;
      console.log('Lr', left, right);
    } //move the left up
    // Left------- Middle --------Right
    else if (middleVal > searchVal) {
      right = middle - 1;
      console.log('Rl', left, right);
    } //move the right down
    else {
      return middle;
    } //found
  }
  return -1; //not found
}

console.log('binary search 3', findLocation(arrSorted, 3));
console.log('binarySearch 7', findLocation(arrSorted, 7));
console.log('binarySearch 100', findLocation(arrSorted, 100));