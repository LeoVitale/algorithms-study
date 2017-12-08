// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
let regex = /\b(\W+)\b/g;

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

//COMPLEX PALINDROME
// function palindrome(str) {
//   let normalizeString = str.toLowerCase().replace(regex, '');
//   let reversed = [...normalizeString].reverse().join('');

//   return reversed === normalizeString;
// }

module.exports = palindrome;
