//global vs local scope in function
//it is possible to have both local and global variables with the same name

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater"; //this will override the global scope
  // Only change code above this line
  return outerWear;
}

myOutfit();