/**
 * @param {number}
 * @return {number}
 */

//Time: O(n)
//Space: O(1)
const tribonacci = function(n) {
  let nMinusOne = 1;
  let nMinusTwo = 1;
  let nMinusThree = 0;

  if(n < 3){
    return [0,1,1][n];
  }

  for(let i = 3; i <= n; i++) {
    let nextNum = nMinusOne + nMinusTwo + nMinusThree;
    nMinusThree = nMinusTwo;
    nMinusTwo = nMinusOne;
    nMinusOne = nextNum
  }

  return nMinusOne;
};