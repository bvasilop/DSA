'use strict';

function intersectFun(arr1, arr2) {
  return arr1.filter(function(n) {
    return arr2.indexOf(n) != -1;
  });
}

console.log('intersectFun', intersectFun([2, 1], [2, 3]));

function intersect(a, b) {
  let d = {};
  let results = [];
  for (let i = 0; i < b.length; i++) {
    d[b[i]] = true;
  }
  for (let j = 0; j < a.length; j++) {
    if (d[a[j]])
      results.push(a[j]);
  }
  return results;
}
console.log('intersect', intersect([2, 1], [2, 3]));
console.log('intersect', intersect([2, 1], [4, 2, 3]));