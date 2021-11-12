
/**
 * @param {string} s
 * @return {number}
 */
let = lengthOfLongestSubstring = function(str) {
    let map = new Map();
    let longestLength = 0;
    for(let i = 0; i < str.length; i++) {
        console.log(`checking ${str[i]} at ${i}`);
        if(!map.has(str[i]))
        {
           map.set(str[i], i);
           longestLength = (i+1 === str.length && map.size > longestLength) ? map.size : longestLength;
        }
        else
        {
            console.log(map);
            longestLength = map.size > longestLength ? map.size : longestLength
            i = i < str.length ? map.get(str[i]) : i;
            console.log('setting i to ' + i);
            map.clear();
        }
    }

    return longestLength;
};

lengthOfLongestSubstring('abcbad');
"abcabcbb"
"bbbbb"
"pwwkew"
""


   // debugger;
    // if(str.length === 0) {
    //     return 0;
    // }
    // let temp = str.slice(1);
    // if(temp.indexOf(str[0]) !== -1) {
    //     lengthOfLongestSubstring(temp.slice(0, temp.indexOf(str[0])));
    // }
    // else
    // {
    //     lengthOfLongestSubstring(temp.slice(0));
    // }

/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/