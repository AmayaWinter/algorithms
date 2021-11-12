var isPP = function(n) {
    
    let proof = null;
    let maxBase = Math.floor(Math.sqrt(n));
    for(let base = 2; base <= maxBase; base++) {
        let maxPow = Math.log2(n);
        for(let pow = 2; pow <= maxPow; pow++) {
            if(base**pow === n) {
                proof = [base, pow];
                break;
            }
        }
        if(proof !== null) {
            break;
        }
    }
    
    return proof;
  }

/** logarithm -- how many times do we multiply the base to get N  2x2x2 = 8 is log2(8) = 3    */
  

  