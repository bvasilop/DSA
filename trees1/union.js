'use strict';

function unionFun(arr1, arr2) {
  function unique(x) {
    return x.filter(function(elem, index) {
      return x.indexOf(elem) === index;
    });
  }
  return unique(arr1.concat(arr2));
}

console.log('unionFun', unionFun([2, 1, 3, 4], [4, 2]));
console.log('unionFun', unionFun([4, 2, 1, 3], [4, 2]));

function union(arr1, arr2) {
  var obj = {},
    i = 0,
    j = 0,
    // i = arr1.length,
    // j = arr2.length,
    newArray = [];
  while (i < arr1.length) {
    if (!(arr1[i] in obj)) {
      obj[arr1[i]] = true;
      newArray.push(arr1[i]);
    }
    i++;
  }
  while (j < arr2.length) {
    if (!(arr2[j] in obj)) {
      obj[arr2[j]] = true;
      newArray.push(arr2[j]);
    }
    j++;
  }
  return newArray;
}
console.log('union', union([2], [1, 2]));
console.log('union', union([4, 2, 1, 3], [4, 2]));