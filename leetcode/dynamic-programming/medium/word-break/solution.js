//https://leetcode.com/problems/word-break/
/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.


Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 */



//12/01/21
/*
  Explanation:
  - make an array (dp) of s.length and populate all false, we're using this to save all the matches
  we've found so far so if s is "abcd" and wordDict has "abc" and "d", as we iterate through s well
  set dp to true and the ending index of each matching word

  at i = 2
      s: a b c d
  index: 0 1 2 3
         f f t f
  meaning that we have a word in wordDict that matches s up until abc


  - iterate through s and at every letter (index i) of s, check to see if there is a word in wordDict
  - We'll need to get a substring from s which is the same length as the word we're trying to compare it to
      start = i - (dictWord.length-1)
      end = i+1 (this is because substring and slice don't include the ending index)
  if(dp[start-1]) is true, we can assume that some word had matched up until that point, so we can
  then get the substring(start, end) from s, and compare it to that word, if it matches then we can
  set dp[i] = true meaning we have words that match s up until that point

  our answer should be at dp[dp.length-1] because we want to match the entirety of s, so we can
   just return that at the end

 */

//Time: n (iterate through s) *
// w (potentially checking every word) *
// w (potentially create a the length of each word in wordDict)

//Space: O(n)

const wordBreak = function(s, wordDict) {
  if(s === "") {
    return true;
  }

  const dp = Array(s.length).fill(false);

  for(let i = 0; i < s.length; i++) {
    let end = i+1;
    for(word of wordDict) {
      let start = i - (word.length - 1);
      if(dp[start-1] || start === 0) {
        let sSlice = s.slice(start, end);
        if(start >= 0 && word === sSlice) {
          dp[i] = true;
          break;
        }
      }
    }
  }

  return dp[dp.length-1];
}




console.log(wordBreak("leetcode",["leet","code"])); //true
console.log(wordBreak("applepenapple", ["apple","pen"])); //true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])); //true

