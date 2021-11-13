//https://www.algoexpert.io/questions/Nth%20Fibonacci
/*
  Input: n representing the nth number in the fib sequence
  Mapping:
    Index: 1, 2, 3, 4, 5, 6
    Seq:   0, 1, 1, 2, 3, 5
    So if you want the 6th item in the sequence you would return seq[n-1]

 */

// we only need to know the last two values of the sequence to determine the next value
// using 2 variables we can generate the sequence out to n and return
//Time: O(n) / Space: O(1);
function getNthFib(n) {
  if(n === 1) return 0;
  if(n === 2) return 1;

  let nMinusTwo = 0 ;
  let nMinusOne = 1;
  let newN = 0;
  for(let i = 2; i < n; i++) {
    newN = nMinusTwo + nMinusOne;
    nMinusTwo = nMinusOne;
    nMinusOne = newN;
  }
  return newN;
}

// recursive approach, use an array to save the sequence which has already been generated to avoid
// regenerating the list again each time2
// Time: O(n) - n recursive calls
// Space: O(n) - n recursive calls on the callstack, n seq array -> O(2n) => O(n)
function getNthFibRec(n) {
  debugger;
  const seq = [0,1];
  if(n <= 2) { return seq[n-1]};
  function find(n) {
    if(n <= 2) { return seq[n-1]};
    if(seq[n-1]) {
      //to avoid recalculating the rest of the list each time, we just return the value at n that we already calculated
      return seq[n-1];
    }
    else {
      // we can avoid the second recursive call because we
      // already calculated this value in the first find recursive call
      let val = find(n-1) + seq[n-3];
      seq.push(val);
      return val;
    }
  }
  find(n);
  return seq[n-1];
}

console.log(getNthFibRec(6));



