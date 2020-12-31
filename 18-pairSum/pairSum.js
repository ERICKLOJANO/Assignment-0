function pairSum(nums, target) {
  // Insert code here;
  //throws error if nums has less than 2 values
  if(nums.length < 2){
    throw "Array must have 2 or more values"
  }

    //first for loop to iterate through nums
    for(let i = 0; i < nums.length; i++){
      //second for loop
      for(let j = 0; j < nums.length; j++){
        //ensures that i and j are not the same
        if(i !== j){
          //checks if they add up to target, and returns true
          if(nums[i] + nums[j] === target){
            return true;
          }
        }
      }
    }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
