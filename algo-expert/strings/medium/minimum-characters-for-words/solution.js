/*
Time: O(n * m) - where n is the size of the array and m is the length of the longest word
Space: O(u) - where u is the number of unique characters
 */

function minimumCharactersForWords(words) {
  let freq = {};
  let output = [];

  words.forEach(word => { //loop over the words
    let wordFreq = {};
    word.split('').forEach(char => { //create a character frequency map for that word
      wordFreq[char] = (wordFreq[char] || 0 ) + 1;
    });

    for(const [char, charFreq] of Object.entries(wordFreq)) { //update the overall frequency map
      freq[char] = Math.max(charFreq, freq[char] || 0);
    }
  });

  for(char in freq) { //make an array from the frequency map and return it
    for(let i = 0; i < freq[char]; i++) {
      output.push(char);
    }
  }

  return output;
}

console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"])); // ->
/*
[
  't', 't', 'h', 'i',
  's', 'a', 'd', 'd',
  'e', 'e', 'm', '!'
]
 */