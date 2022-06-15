//understanding undefined value returned from a function

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){ //this function adds 5 to the sum variable
  sum = sum + 5; //its returned value is undefined
}

// Only change code above this line

addThree();
addFive();