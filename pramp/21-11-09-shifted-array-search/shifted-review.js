function shiftedArrSearch(arr, num) {
  let pivot = findPivot(arr, num);
  console.log('pivot', pivot);
  if(pivot === 0 || num < arr[0]) { //go right
    return binarySearch(arr, pivot, arr.length-1, num);
  }
  return binarySearch(arr, 0, pivot-1, num);
}

function binarySearch(arr, start, end, num) {
  while(start <= end) {
    let pivot = start + Math.floor((end - start) / 2)
    if(num === arr[pivot]) {
      return pivot;
    }
    if(num > arr[pivot]) {start = pivot + 1;}
    else {end = pivot - 1;}
  }
  return -1;
}

function findPivot(arr) {
  debugger;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let pivot = start + Math.floor((end - start) / 2);
    if(pivot === 0 || arr[pivot] < arr[pivot -1]) {
      return pivot;
    }
    if(arr[pivot] < arr[0]) { //go left
      end = pivot - 1;
    }
    else {
      start = pivot + 1;
    }
  }
  return 0;
}

// console.log(shiftedArrSearch([9,12,17,2,4,5,], 2));
// console.log(shiftedArrSearch([8,9,12,17,2,4,5,6,7], 7));
console.log(shiftedArrSearch([0,1,2,3,4,5], 1));


function shiftedArrSearch(arr, num) {
  let pivot = findPivot(arr, num);
  if(pivot === 0 || num < arr[0]) { //go right
    return binarySearch(arr, pivot, arr.length-1, num);
  }
  return binarySearch(arr, 0, pivot-1, num);
}

function binarySearch(arr, start, end, num) {
  while(start <= end) {
    let pivot = start + Math.floor((end - start) / 2)
    if(num === arr[pivot]) {
      return pivot;
    }
    if(num > arr[pivot]) {start = pivot + 1;}
    else {end = pivot - 1;}
  }
  return -1;
}

function findPivot(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let pivot = start + Math.floor((end - start) / 2);
    if(pivot === 0 || arr[pivot] < arr[pivot -1]) {
      return pivot;
    }
    if(arr[pivot] < arr[0]) {
      end = pivot - 1;
    }
    else {
      start = pivot + 1;
    }
  }
  return 0;
}

binarySearch([1,2],1);