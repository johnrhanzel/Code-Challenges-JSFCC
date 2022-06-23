//counting cards

let count = 0;

function cc(card) {
  // Only change code below this line

  let bet = '';
  //use switch case for each cards
  switch(card){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; //increment the count
      break;
    case 7:
    case 8:
    case 9:
      count = count; //if count is equal to count
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--; //decrement the count
      break;
  }

  //use if else to display the message
  if (count === 5) bet = "5 Bet";
  else if (count === 0) bet = "0 Hold";
  else if (count === -5) bet = "-5 Hold";
  else if (count === -1) bet = "-1 Hold";
  else if (count === 1) bet = "1 Bet";


  return bet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');