function fizzBuzz(start, end) {
  // Insert code here;

  //create new array
  var newArray = [];

//for loop that iterates through the given "start" and "end" values
  for(let i = start; i <= end; i ++){
    //if multiple of 3 and 5, then send fizzbuzz to array
    if(i % 15 === 0){
      newArray.push("FizzBuzz");
    }
    //if multiple of 3, then send fizz to array
    else if(i % 3 === 0){
      newArray.push("Fizz");
    }
    //if multiple of 5, then send buzz to array
    else if(i % 5 === 0){
      newArray.push("Buzz");
    }
    //else send number to array
    else{
      newArray.push(i);
    }
  }
  return newArray;
}

// Do not edit this line;
module.exports = fizzBuzz;
