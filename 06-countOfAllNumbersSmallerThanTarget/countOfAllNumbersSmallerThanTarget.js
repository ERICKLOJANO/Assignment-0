function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let num = 0;
  //for loop that iterates through nums
  for(let i = 0; i < nums.length; i++){
      //if nums at 1 is less than the target
      if(nums[i] < target){
        //then add 1 to num
        num = num + 1;
      }
  }
  return num;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
