function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
  let num = 0;
  //for loop that iterates through array
  for(let i = 0; i < nums.length; i++){
    //if nums at i is equal to 1
    if(nums[i] == i){
      // then add 1 to num
      num = num + 1;
    }
  }
  return num;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
