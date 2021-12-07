/*
//https://www.algoexpert.io/questions/Longest%20Palindromic%20Substring

Approach:
at each letter, check the previous letter, and the two letters on either end. If either one of
these conditions is true, then check for a longer palindrome starting at that point and moving out

 */
//Time: O(n^2)
//Space: O(n) - we use n space for the substring that is returned which could potentially be the entire string
function longestPalindromicSubstring(string) {

  // odd number of letters, letters on either end should be the same
  // abcba
  let currentMaxLength = 1;
  let currentMaxStart = 0;
  let currentMaxEnd = 0;
  if(string.length === 1) {
    return string;
  }

  for(let i = 1; i < string.length; i++) {
    let evenIndices = [0,0];
    let oddIndices = [0,0];

    if(string[i] === string[i-1]) {
      evenIndices = isPalindrome(string, i-1, i);
    }
    if(string[i-1] === string[i+1]) {
      oddIndices = isPalindrome(string, i-1, i+1);
    }

    let isEven = evenIndices[1] - evenIndices[0] > oddIndices[1] - oddIndices[0]
    let currentLength = (isEven ? evenIndices[1] - evenIndices[0] : oddIndices[1] - oddIndices[0] ) + 1
    if(currentLength > currentMaxLength) {
      currentMaxStart = isEven ? evenIndices[0] : oddIndices[0]
      currentMaxEnd = isEven ? evenIndices[1] : oddIndices[1];
      currentMaxLength = currentLength;
    }
  }

  return string.slice(currentMaxStart, currentMaxEnd).join('');
}

function isPalindrome(word, left, right) {

  while(left >= 0 && right <= word.length-1) {
    if(word[left] === word[right]) {
      left--;
      right++;
    }
    else {
      break;
    }
  }

  return [left+1, right];
}
