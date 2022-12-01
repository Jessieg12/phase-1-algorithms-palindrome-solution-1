function isPalindrome(word) {

  let Word = word
  let reversedWord = Word.split('').reverse().join('')
  if(reversedWord === word) return true;

  return false;

  // Write your algorithm here
}

/* 
  We want to take a word and reverse it
  Check to see if the revered word is the same as the word
  return true if it matches
  return false if it does not
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


/*



*/