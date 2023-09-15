/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if(str1.length!==str2.length){
    return false;
  }
  str1=str1.toLowerCase().split('').sort();
  str2=str2.toLowerCase().split('').sort();
  // console.log(str1,str2);
  return JSON.stringify(str1)===JSON.stringify(str2);
}

module.exports = isAnagram;
// console.log(isAnagram('car','rac'));
// console.log(isAnagram('Car','rac'));
// console.log(isAnagram('aar','rac'));
// console.log(isAnagram('@ar','a@r'));
