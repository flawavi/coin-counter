/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

// create values for coins
// determine how many times the highest value coin can go into the total
  // return that # of that coin
// determine whether there is a remainder
  // return that # of that coin
// determine how many times the next highest value coin can go
// into the remainder, etc.


function coinCounter (total) {

total*=100;
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarter: 0,
    dime: 0,
    nickle: 0,
    penny: 0
  };

      if (total % 25 < total) {
        coinPurse["quarter"] = Math.floor(total / 25)
        debugger
        total -= 25 * coinPurse["quarter"]

      }

      if (total % 10 < total){
        coinPurse["dime"] = Math.floor(total / 10)
        total -= 10 * coinPurse["dime"]
        debugger

      }

      if (total % 5 < total) {
        coinPurse["nickle"] = Math.floor(total / 5)
        total -= 5 * coinPurse["nickle"]

      }

      if (total % 1 < total) {
        coinPurse["penny"] = Math.floor(total / 1)
        total -= 1 * coinPurse["penny"]
        debugger

      }

    console.log(coinPurse);
    return coinPurse;
  }



coinCounter(.99);















