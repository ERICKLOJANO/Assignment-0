function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let num = 0;
  //for loop that iterates through nums array
  for(let i = 0; i < nums.length; i++){
    //if nums at i is even
    if(nums[i] % 2 == 0){
      //then add 1 to num
      num = num + 1;
    }
  }
  return num;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
