function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  //initiates result as 1
  let result = 1;

  //for loop that iterates through arguments
  for(let i of args){
    //multiplies result
    result = result * i;
  }
  return result;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
