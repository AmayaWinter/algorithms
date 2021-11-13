function isPalindrome(string) {
  let arr = string.toLowerCase().split('');
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
    if(arr[left++] !== arr[right--]) {
      return false;
    }
  }
  return true;
}

function isPalindromeRec(string) {
  debugger;
  let arr = string.toLowerCase().split('');
  function check(arr, start, end) {
    if(start >= end) {
      return true;
    }
    if(arr[start] === arr[end]) {
      return check(arr, start + 1, end - 1);
    }
    return false;
  }
  return check(arr, 0, arr.length -1);
}

module.exports = {
  isPalindrome,
  isPalindromeRec
}


