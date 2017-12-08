// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//option 1
// function maxChar(str) {

//  let max = 0,
//      maxChar = '';
//   [...str].forEach(function(char){
//     if(str.split(char).length > max) {
//         max = str.split(char).length;
//         maxChar = char;
//      }
//   });
//   return maxChar;

// }

//option 2
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
