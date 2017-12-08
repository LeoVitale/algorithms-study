// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//#solution 1
// function reverse(str) {
//   return [...str].reverse().join('');
// }

//#solution 2
// function reverse(str) {
//   let reversed = '';
//   for (const character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

//#solution 3
function reverse(str) {
  return [...str].reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

module.exports = reverse;
