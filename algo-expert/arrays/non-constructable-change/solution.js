//https://www.algoexpert.io/questions/Non-Constructible%20Change
/*
  Input: array of positive integers representing coins, not distinct, not sorted
  Task: return the minimum number of change that you cannot create with these coins

  Approach:
    consider that the minimum number of non-returnable change is 1, an assume that the minimum
    non-returnable change is current returnable change + 1
    if our next change value is greater than returnable change + 1 then we've reached the min non-returanble change

    if the min change is not some number in the array, it should be the next number after the maximum number of change you can create using
    all coins sum(coins) + 1
 */

function nonConstructibleChange(coins) {
  let minChange = 0; //how much change we can create up until this point
  coins.sort((a,b) => a-b);
  for(let i = 0; i < coins.length; i++) {
    if( coins[i] > minChange + 1) {break;} // we found the value, can return here
    minChange += coins[i];
  }
  return minChange + 1; // we've added up all the coins, the next minimum should be one number after total
}