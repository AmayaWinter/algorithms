function findPivot(arr) {
  let start = 0;
  let end = arr.length - 1;
  while(start <= end) {
    let mid = Math.floor((end - start) / 2) + start;
    if(mid === 0 || arr[mid] < arr[mid-1]) {
      return mid;
    }
    else if(arr[mid] < arr[0]) {
      end = mid - 1;
    }
    else {
      start = mid + 1;
    }
  }
  
  return 0;
}

function shiftedArrSearch(arr, num) {
  let pivot = findPivot(arr);
  console.log('pivot', pivot);
  if(num >= arr[pivot] && num >= arr[0] ) {
    return binarySearch(arr, 0, pivot, num);
  }
  return binarySearch(arr, pivot, arr.length -1, num)
}

function binarySearch(arr, start, end, num) {
  debugger;
  while(start <= end) {
    let mid = Math.floor((end - start) / 2) + start;
    if(num === arr[mid]) {
      return mid;
    }
    if(num > arr[mid]) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }
  return -1;
}


console.log(shiftedArrSearch([9,12,17,2,4,5], 17));

// console.log(findPivot([0,1,2,3,4,5]))
// console.log(findPivot([3,2,1]));
// console.log(findPivot([9,12,17,2,4,5,6,7,8]));