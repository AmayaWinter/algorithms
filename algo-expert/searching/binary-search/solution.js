//https://www.algoexpert.io/questions/Binary%20Search
//Input: sorted array of numbers, and a target number to be found
//Approach: use binary search, choose a midpoint, if the target is less than, discard the right side
//else discard the left
//if target === arr[mid] return mid
//Time: O(log(n))
//Space: O(1) - just using a few variables, regardless of input size
function binarySearch(array, target) {
  let start = 0;
  let end = array.length -1;
  let mid;
  while(start <= end) {
    mid = Math.floor((end - start) / 2) + start;
    if(target === array[mid]) { return mid;}
    else if(target < array[mid]) { end = mid-1;}
    else { start = mid+1; }
  }
  return -1;
}

//Recursive approach
//Time: O(log(n))
//Space O(log(n)) - call stack frames
function binarySearchRec(array,target) {
  function search(array, start, end, target) {
    if(start > end) { return -1;}
    let mid = Math.floor((end - start) / 2) + start;
    if(target === array[mid]) { return mid;}
    else if(target < array[mid]) {
      return search(array, start, mid-1, target);
    }
    else {
      return search(array, mid+1, end, target);
    }
  }
  return search(array, 0, array.length - 1, target);
}

console.log(binarySearchRec([1, 5, 23, 111],111));

// Do not edit the line below.
exports.binarySearch = binarySearch;
