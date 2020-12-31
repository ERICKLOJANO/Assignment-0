function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let result = 0;
  for(let i = 0; i < nums.length; i++){
    //if nums at i is greater than or equal to start AND nums at i is less than or equal to the end value
    if(nums[i] >= start && nums[i] <= end){
      // then add 1 to result
      result = result + 1;
    }
  }
  return result;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
