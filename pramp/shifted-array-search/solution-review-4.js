//things to consider
//you have two sorted arrays, the number you're looking for is going to be in either one
//everything in the right array is going to be smaller than the first item in the left
//therefore if the number is smaller than the first element, it must be on the right, else left (assuming it exists)
//since it's already sorted we're going to be using a binary search

//the key will be to find out where the start of the second array is
//what is true about that 'pivot point'?
//the item to the left of it should be larger than it
//if the pivot is greater than the first element, then we should start looking on the left


//LEARNINGS:
/*
finding the pivot is not a binary search, because if we consider arr[mid] < arr[0] and go right, then
we could end up on the wrong side of the array when the pivot is still to the left
take this example [9,12,17,2,4,5,6,7,8]
assume that the pivot chose is 4, if we say 4 < 9 and set start to 5 then we can never find the pivot point

 */


function shiftedArraySearch(arr, target) {
  const pivot = findPivot(arr);
  if(pivot === 0 || target >= arr[0]) {
    return binarySearch(arr, pivot, arr.length - 1, target);
  }
  return binarySearch(arr, 0, pivot - 1, target);
}

function binarySearch(arr, start, end, num) {
  while(start <= end) {
    let mid = Math.floor((end-start) / 2) + start;
    if(arr[mid] === num) {
      return mid;
    }
    else if(num > arr[mid] ) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }
  return -1; //in the case we don't find anything
}

function findPivot(arr) {
  let start = 0;
  let end = arr.length -1;
  while(start <= end) {
    let mid = Math.floor((end-start) / 2) + start;
    if(mid === 0 || arr[mid] < arr[mid - 1]) {
      return mid;
    }
    if(arr[mid] > arr[0]) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }
  return 0;
}

function findPivotRec(arr, start, end) {
  let mid = Math.floor((end-start) / 2) + start;
  if(mid === 0 || arr[mid] < arr[mid - 1]) {
    return mid;
  }
  if(arr[mid] > arr[0]) { // go right
   return findPivotRec(arr, mid + 1, end);
  }
  else {
    return findPivotRec(arr, start, mid - 1);
  }
}



console.log(findPivot([0,1,2,3,4,5]))
console.log(findPivot([3,2,1]));
console.log(findPivot([9,12,17,2,4,5,6,7,8]));

console.log(findPivot([0,1,2,3,4,5]))
console.log(findPivot([3,2,1]));
console.log(findPivot([9,12,17,2,4,5,6,7,8]));

// console.log(shiftedArraySearch([9,12,17,2,4,5], 2)); // 3
// console.log(shiftedArraySearch([9,12,17,2,4,5], 17)); // 2
// console.log(shiftedArraySearch([2], 2)); // 0
// console.log(shiftedArraySearch([1,2], 2)); // 1
// console.log(shiftedArraySearch([3,1,2], 2)); // 2
