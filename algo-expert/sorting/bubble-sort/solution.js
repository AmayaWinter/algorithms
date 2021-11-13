//Input: array of numbers
//Task: sort the array
//Output: the sorted array
//Approach:
// use optimized bubble sort to sort the array, compare numbers at n and n+1,
// if arr[n+1] < arr[n] then swap them, the largest numbers will make their way to the end
// in the next iteration we don't need to go all the way to the end because we know that the largest numbers
// are already in their correct position
// optimization: if no swaps were made we can assume the array is fully sorted and there's no need to continue

//Time: O(n) / Space: O(1)
function bubbleSort(arr) {
  for(let i = arr.length; i > 0; i--) {
    let swapped = false;
    for(let j = 0; j < i-1;j++) {
      if(arr[j+1] < arr[j]) {
        swapped = true;
        swap(arr, j, j+1);
      }
    }
    if(!swapped) break;
  }
  return arr;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

console.log(bubbleSort([8,5,2,9,5,6,3]));