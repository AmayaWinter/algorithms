//Time: O(n) / Space: O(1)
function isMonotonic(array) {
  // Write your code here.
  if(array.length <= 1) { return true; }
  let type = 'equal';
  if(array[0] < array[array.length-1]) {
    type = 'increasing'
  }
  else if(array[0] > array[array.length-1]) {
    type = 'decreasing';
  }

  let increasing = array[0] < array[array.length-1];

  for(let i = 0;i < array.length-1;i++) {
    if(type === "equal" && array[i] !== array[i+1]) {
      return false;
    }

    if(type === "increasing" && array[i] > array[i+1]) {
      return false;
    }

    if(type === 'decreasing' && array[i] < array[i+1]) {
      return false;
    }
  }

  return true;
}

// console.log(isMonotonic([1,2]));

console.log(isMonotonic([-1, -1, -1, -1, -1, -1]));
