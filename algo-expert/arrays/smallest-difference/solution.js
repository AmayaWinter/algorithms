function smallestDifference (arrOne, arrTwo) {
  arrOne.sort((a,b) => a-b);
  arrTwo.sort((a,b) => a-b);
  let oneIdx = 0;
  let twoIdx = 0;
  let smallestDiff = Infinity;
  let closestPair = [];
  while(oneIdx < arrOne.length && twoIdx < arrTwo.length) {
    if(arrOne[oneIdx] === arrTwo[twoIdx]) { return [arrOne[oneIdx], arrTwo[twoIdx]];}
    let currentDiff = Math.abs(arrOne[oneIdx] - arrTwo[twoIdx]);
    if(currentDiff < smallestDiff) {
      smallestDiff = currentDiff;
      closestPair = [arrOne[oneIdx], arrTwo[twoIdx]];
    }
    if(arrOne[oneIdx] < arrTwo[twoIdx]) {
      oneIdx++
    }
    else {
      twoIdx++;
    }
  }
  return closestPair;
}
