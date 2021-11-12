function findOdd(arr) {
    //stores how many times a number occurred
    let occurence = {};
    arr.sort((a,b) => a-b); //sort the array, so we'll know as soon as the first odd number of occurrences has occurred and can break
    let lastNum = arr[0] , oddNum = 0;
    occurence[arr[0]] = 1;
    for(let i = 1; i < arr.length; i++) {
        //if this number isn't the same as the previous and the previous occured an odd number of times, we've found the odd number
        if(lastNum !== arr[i] && occurence[lastNum] % 2 === 1) {
            oddNum = lastNum;
            break;
        }
        else {
            occurence[arr[i]] = !(arr[i] in occurence) ? 1 : occurence[arr[i]]+1;
        }
        lastNum = arr[i];
    }
    oddNum = lastNum; //if we got here them it means the last number is the odd number
    return oddNum;
}

// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]));
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]));
let temp = {'a': 1};

//interesting node: you can XOR all the numbers and it returns the number that appears an odd number of times, assuming there is only one
