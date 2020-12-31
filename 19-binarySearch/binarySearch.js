class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    //breaks nums array into different sections
    let middle = Math.floor(nums.length / 2);
    let start = nums.slice(0, middle);
    let end = nums.slice(middle, nums.length);

    //if the middle num is = to target, return true
    if(nums[middle] === target){
      return true;
    }
    //if the target hasnt been found, then...
    //checks if nums has more than 1 value
    if(nums.length > 1){
      //if the target is less than the middle value, search the "start" section
      if(nums[middle] > target){
        this.flag = this.binarySearch(start, target);
      }
      //else, search the "end" section
      else{
        this.flag = this.binarySearch(end, target);
      }
    }
    //return false
    return this.flag;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
