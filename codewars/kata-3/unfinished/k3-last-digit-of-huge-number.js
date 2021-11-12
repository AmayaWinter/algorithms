/**
 *
 * @param {String} base
 * @param {String} pow
 * @returns {number}
 */
let lastDigitLarge = function(base, pow){

    if(pow === '0') {
        return 1;
    }

    let patterns = {
        '0' : [0, 0, 0, 0],
        '1' : [1, 1, 1, 1],
        '2' : [2, 4, 8, 6],
        '3' : [3, 9, 7, 1],
        '4' : [4, 6, 4, 6],
        '5' : [5, 5, 5, 5],
        '6' : [6, 6, 6, 6],
        '7' : [7, 9, 3, 1],
        '8' : [8, 4, 2 ,6],
        '9' : [9, 1, 9, 1],
    }

    let baseLastDigit = base.slice(-1)
    let pattern = patterns[baseLastDigit]
    let patternIdx = pow.slice(-2) % 4;
    patternIdx = patternIdx === 0 ? 3 : patternIdx -1

    return Number(pattern[patternIdx]);
}

/**
 *
 * @param {Number[]} arr
 */
let lastDigit = function(arr) {

    //the pattern of last numbers based on the last digit of the base
    let patterns = {
        '0' : [0, 0, 0, 0],
        '1' : [1, 1, 1, 1],
        '2' : [2, 4, 8, 6],
        '3' : [3, 9, 7, 1],
        '4' : [4, 6, 4, 6],
        '5' : [5, 5, 5, 5],
        '6' : [6, 6, 6, 6],
        '7' : [7, 9, 3, 1],
        '8' : [8, 4, 2 ,6],
        '9' : [9, 1, 9, 1],
    }

    arr = arr.reverse();

    let baseLastDigit = String(arr[1]).slice(-1);
    //get the pattern based on the last digit
    let pattern = patterns[baseLastDigit];
    //get the position of the last digit by modding the pow by 4
    let patternIdx = String(arr[0]).slice(-2) % 4;
    patternIdx = patternIdx === 0 ? 3 : patternIdx -1


    for(let i = 2; i < arr.length; i++) {
       baseLastDigit = String(arr[i]).slice(-1);
       console.log('baselastdigit', baseLastDigit);
       let pattern = patterns[baseLastDigit];

    }

}

// console.log(lastDigitLarge('694022', '140249'));
// console.log(lastDigitLarge('123232', '2'));
console.log(lastDigitLarge('6','21'));
console.log(lastDigitLarge('7','6'));





//4^2  lastDigitBase(4, 2)
//3^16
