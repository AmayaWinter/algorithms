const numDecodings = function(s) {

  if(s[0] === '0') return 0;
debugger;
  // ways[0] = 1;
  // ways[1] = 1;
  let nMinusTwo = 1;
  let nMinusOne = 1;

  for(let i = 2; i < s.length+1; i++) {
    //good for turning something that you know is a number into a number, but not for actually checking if something is a valid number
    let possibleCombo = (s[i-2] + s[i-1]) | 0;
    // let possibleCombo = Number.parseInt(s[i-2] + s[i-1]));

    let current = 0;
    if(s[i-1] !== '0') {
      current = nMinusOne
    }
    if(possibleCombo >=10 && possibleCombo <= 26) {
      current += nMinusTwo;
    }
    nMinusTwo = nMinusOne;
    nMinusOne = current;

  }

  return nMinusOne;
};

console.log(numDecodings('2290'));