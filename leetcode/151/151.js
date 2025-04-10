/**
 * @param {string} s
 * @return {string}
 */
// First Try ( Bad Performance ) => O(n^2)
/*
    Every string concanation cost a lot
    --> Should use array for word collection and then join with loop
*/
var reverseWords = function (s) {
  let result = '';
  let tempWorld = '';
  const count = s.length - 1;
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (current !== ' ') {
      tempWorld = tempWorld + s[i];
    }

    if ((i === count || current === ' ') && tempWorld !== '') {
      if (result === '') {
        result = tempWorld;
      } else {
        result = tempWorld + ' ' + result;
      }
      tempWorld = '';
    }
  }
  return result;
};

// Javascript function by ChatGPT ( beat 100% )
var reverseWords = function (s) {
  return s
    .trim()
    .split(/\s+/) // splits by one or more spaces
    .reverse() // reverses the array
    .join(' '); // joins back into a string
};

// without Javascript function by ChatGPT ( beat 100% )
var reverseWords = function (s) {
  let i = s.length - 1;
  const words = [];

  while (i >= 0) {
    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') i--;
    if (i < 0) break;

    let wordChars = [];

    // Build word backwards
    while (i >= 0 && s[i] !== ' ') {
      wordChars.push(s[i]);
      i--;
    }

    // Reverse the word and push to words array
    let word = '';
    for (let j = wordChars.length - 1; j >= 0; j--) {
      word += wordChars[j];
    }
    words.push(word);
  }

  // Assemble the result string manually
  let result = '';
  for (let k = 0; k < words.length; k++) {
    if (k > 0) result += ' ';
    result += words[k];
  }

  return result;
};

s = 'the sky is blue';

// s = '  hello world  ';

console.log(reverseWords(s));
