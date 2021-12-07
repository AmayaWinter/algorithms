function compressWord(word) {
  let letters = [];
  let letterIdx = 0;
  for(let i = 0; i < word.length; i++) {
    let letter = word[i];
    letters[letterIdx] = [letter];
    console.log('letter', letter);
    for(let j = i + 1; j < word.length; j++) {
      if(word[j] === letter) {
        console.log('test');
        letters[letterIdx].push(letter);
        i++;
      }
      else {
        break;
      }
    }
    letterIdx++;
  }

  letters.sort((a, b) => b.length - a.length);

  for(let i = 0; i < letters.length;  i++) {
    let letter = letters[i][0];
    let re = new RegExp('' + letter + '{2,}');
    console.log(re);
    word = word.replace(re, '');
  }
  console.log(letters)
  console.log(word);
}

console.log(compressWord('abbcccb'));
console.log(compressWord('aba'));