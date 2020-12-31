function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  let num = 0;

  //for loop that iterates through arr
  for(let i = 0; i < arr.length; i++){
    //if arr at i is a boolean
    if(arr[i] === false || arr[i] === true) {
      //then add 1 to num
      num = num + 1;
    }
    //if its a string also add 1
    if(typeof(arr[i]) === "string"){
      num = num + 1;
    }
  }
  return num;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
