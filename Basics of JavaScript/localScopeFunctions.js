//local scope and functions
//variables which are declared within a function have a local scope

function myLocalScope() {
    // Only change code below this line
    const myVar = ""; //add this line to create a local scope
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);