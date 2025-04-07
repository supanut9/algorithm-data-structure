/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  let count = 0;
  while (i >= 0) {
    if (s[i] !== ' ') {
      count++;
    }

    if (s[i] === ' ' && count !== 0) {
      break;
    }
    i--;
  }

  return count;
};

s = 'Hello World';

s = '   fly me   to   the moon  ';

s = 'a';

console.log(lengthOfLastWord(s));
