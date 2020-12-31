class MySolution {
  countDownSum(num) {
    // Insert code here;
    //if num is equal to 1 return 1
    if(num == 1) {
          return 1;
        }
    //by recursion we use countDownSum function and subtract one from it
    return (num + (this.countDownSum(num - 1)));

  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
