/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  answer = '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        return answer;
      }
    }

    answer += strs[0][i];
  }

  return answer;
};

// Optimized by ChatGPT

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  let prefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      // Early exit if index is out of bounds or character doesn't match
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
};

// further optimized by ChatGPT

var longestCommonPrefix = function (strs) {
  if (!strs.length) return '';

  strs.sort();
  const first = strs[0];
  const last = strs[strs.length - 1];
  let i = 0;

  while (i < first.length && first[i] === last[i]) {
    i++;
  }

  return first.slice(0, i);
};

let strs = ['flower', 'flow', 'flight'];

strs = ['dog', 'racecar', 'car'];

strs = ['ab', 'a'];

strs = ['reflower', 'flow', 'flight'];

strs = ['flower', 'flower', 'flower', 'flower'];

strs = ['asdf'];

console.log(longestCommonPrefix(strs));
