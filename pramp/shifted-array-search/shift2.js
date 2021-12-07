function shiftedArrSearch(shiftArr, num) {
  const pivot = getPivot(shiftArr);
  console.log('pivot', pivot);
  if(shiftArr[pivot] > num || pivot === 0) {
    return search(shiftArr, 0, pivot-1, num)
  }
  else {
    return search(shiftArr, pivot, shiftArr.length - 1, num);
  }
}

function search(shiftArr, start, end, num) {
  console.log(shiftArr, start, end, num);
  let notFound = -1;
  if(start === end && shiftArr[start] === num) { return start}
  while(start < end) {
    let q = (Math.floor(end - start + 1) / 2) + start;
    if(q === 0) {
      return shiftArr[q] === num ? q : -1;
    }
    if(shiftArr[q] === num) { return q;}
    else if(shiftArr[q] < num) {
      start = q;
    }
    else {
      end = q;
    }
  }
  return notFound;
}

function getPivot(shiftArr) {
  debugger;
  let left = 0;
  let right = shiftArr.length - 1;
  while(left <= right) {
    if(shiftArr[left+1] < shiftArr[left]) {
      return left;
    }
    else if(shiftArr[right] > shiftArr[0]) {
      return right;
    }
    left++;
    right--;
  }
}
// console.log(getPivot([2]));
// console.log(getPivot([1,2]));
// console.log(getPivot([2,1,2]));

// shiftedArrSearch([2], 2);


// console.log(shiftedArrSearch([2], 2));
// console.log(shiftedArrSearch([1,2], 2));
// console.log(shiftedArrSearch([3,1,2], 2));
console.log(shiftedArrSearch([1,2,3,4,5], 1));