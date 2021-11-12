function spinWords(str) {
    //tokenize words using 'space'
    let origWords = str.split(' ');
    let newWords = [];

    //iterate through words
    for(let i = 0; i < origWords.length; i++) {
        let word = origWords[i];

        //examine each word to check it's length -- if it's 5 or more then reverse it, otherwise leave it alone
        if(word.length >= 5) {
            word = word.split('').reverse().join('');
        }

        //add the result to the new string
        newWords.push(word);
    }
    return newWords.join(' '); //convert words back into a sentence
}

console.log(spinWords(""));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));