//Input: search array and subsequence
//Output: true if the subsequence is within the search array, numbers do not need to be adjacent
//The subsequence is considered valid if the entire subsequence matches, a single number is considered a valid subsequence

//Time: O(n) / Space: O(1)
function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] === sequence[seqIdx]) {
      seqIdx++;
    }
    if(seqIdx === sequence.length) break;
  }
  return seqIdx === sequence.length
}


// Do not edit the line below.
module.exports = isValidSubsequence;
