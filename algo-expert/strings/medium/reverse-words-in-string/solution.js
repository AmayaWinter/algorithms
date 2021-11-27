function reverseWordsInString(string) {
  if(!string.length) return string;

  let reversedString = [];
  let currentToken = [string[0]]; //a group of spaces is considered a token, as is a group of non-spaces
  let currentTokenIsSpace = string[0] === ' '; //determine the type of our first token

  for(let i = 1; i < string.length; i++) {
    let char = string[i];
    if((char === ' ' && currentTokenIsSpace) || //this is a space, and we've been processing spaces, or;
      (char !== ' ' && !currentTokenIsSpace)) { //this is not a space, and we've been processing non-spaces
      currentToken.push(char);
    }
    else { //a change has occurred in the token type
      reversedString.unshift(currentToken.join(''))  //save this token
      currentToken = [char]; //reset the token to just this character
      currentTokenIsSpace = !currentTokenIsSpace; //toggle the token type
    }
  }
  //at the end of the for loop the last token is never added to the reversedString, so lets
  // take care of that here
  if(currentToken.length) {
    reversedString.unshift(currentToken.join(''));
  }

  return reversedString.join('');
}

console.log(reverseWordsInString("Ice cream is the best!")); // -> best! the is cream Ice