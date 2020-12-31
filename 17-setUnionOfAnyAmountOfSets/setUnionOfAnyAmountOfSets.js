function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  //create new set
  var unionSet = new Set();

  //this loop iterates through each set being passed in
  for(let i = 0; i < args.length; i++){
    //this loop iterates through each arg in the set
    for(let j of args[i]){
      unionSet.add(j);//adds arg to unionSet
    }
  }

  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
