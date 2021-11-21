function minNumberOfCoinsForChange(n, denoms) {
  let combos = [];
  let ways = Array(n+1).fill(0);
  ways[0] = 1;
debugger;
  for(let i = 1; i <= n; i++) {
    if(!combos[i]) { combos[i] = []; }
    for(let d = 0; d < denoms.length; d++) {
      let denom = denoms[d];
      if(i - denom >= 0) {
        ways[i] += ways[i - denom] ? 1 : 0;
        if(i - denom === 0) {
          combos[i].push([denom]);
        }
        else {
          if(combos[i-denom].length) {
            combos[i - denom].sort((a, b) => a.length - b.length);
            combos[i].push([denom, ...combos[i - denom][0]]);
          }
        }
      }
    }
  }
  console.log(combos);
  if(combos[n]) {
    combos[n].sort((a,b) => a.length - b.length);
  }
  if(combos[n][0]) {
    return combos[n][0].length;
  }
  return 0;

}

// console.log(minNumberOfCoinsForChange(7, [1,3,5,10]));
console.log(minNumberOfCoinsForChange(7, [2,4]));

