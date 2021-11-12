function validParentheses(parens){
  while(parens.length) {
    let newStr = parens.replace(/\(\)/g, '');
    if(parens === newStr) { break; }
    else { parens = newStr; }
  }
  return parens.length <= 0;
}

console.log(validParentheses("()"));
console.log(validParentheses(")(()))"));
console.log(validParentheses("("));
console.log(validParentheses("(())((()())())"));

/*

https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/
