function titleCaseEdit(title) {
  // Insert code here;
  const newTitle = title.split(" ");

  for(let i = 0; i < newTitle.length; i++){
    newTitle[i] = newTitle[i].charAt(0).toUpperCase() + newTitle[i].substring(1);
  }
  return newTitle.join(" ");
}

// Do not edit this line;
module.exports = titleCaseEdit;
