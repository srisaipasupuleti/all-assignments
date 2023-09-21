/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str=str.toLowerCase();
  console.log(str);
  str=str.replace(/\s/g,'');
  str=str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"");
  console.log('after replacing',str);
  reversedString=str.split('').reverse().join('');
  console.log(str,reversedString);
  return str===reversedString;
}

console.log(isPalindrome('Eva, can I see bees in a cave?')) ;

module.exports = isPalindrome;
