function isPalindrome(word) {
  // Insert code here;
  //splits the word into single letters, reverses order, and then joins them tg
  var reversed = word.split("").reverse().join("");

  //if reversed word is the same as "word" passed in, then return true
  if(reversed === word){
    return true;
  }
  else {
    return false;
  }
}

// Do not edit this line;
module.exports = isPalindrome;
