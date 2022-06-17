//comparisons with the logical and operator (&&)
//logical and operator (&&) returns true if and only if both statements are true

function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50 && val >=25) { //You should only have one if
        return "Yes";
    }
  
    // Only change code above this line
    return "No";
  }
  
  testLogicalAnd(10);