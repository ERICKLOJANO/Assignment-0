function frequencyCounter(word) {
  // Insert code here;
  let counter = {};

  //for loop that iterates through each letter
  for(let i = 0; i < word.length; i++){
    //if that letter is in "counter" then add 1
    if(counter[word[i]]){
      counter[word[i]] += 1;
    }
    //if that letter is not in "counter" then set to one
    else{
      counter[word[i]] = 1;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = frequencyCounter;
