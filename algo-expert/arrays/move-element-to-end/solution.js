function moveElementToEnd(array, toMove) {
  let targetIndices = [];
  array.forEach((num, i) => {
    if(toMove === num) targetIndices.push(i);
  });
}

function swap(arr,i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let temp = [1,2];
swap(temp, 0,1);
console.log(temp);
