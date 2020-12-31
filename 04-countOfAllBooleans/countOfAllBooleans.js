function countOfAllBooleans(arr) {
  // Insert code here;
  let num = 0;

  //for loop that iterates through arr
  for(let i = 0; i < arr.length; i++){
    //if arr at i is a boolean
    if(arr[i] === true||arr[i] === false){
      //then add 1
      num = num + 1;
    }
  }
  return num;
}
// Do not edit this line;
module.exports = countOfAllBooleans;
