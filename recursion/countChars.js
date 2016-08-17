'use strict';

function countChars(str, char) {
  return count(str, char, str.length);

  function count(str, char, maxChars) {
    if (maxChars < 0) return 0;
    if (str[maxChars] === char) {
      return 1 + count(str, char, maxChars - 1);
    }
    return count(str, char, maxChars - 1);
  }
}
console.log('count chars abbccdd c', countChars('abbccdd', 'c'));
console.log('count chars abbccdd a', countChars('abbccdd', 'a'));
console.log('count chars abbccdd z', countChars('abbccdd', 'z'));