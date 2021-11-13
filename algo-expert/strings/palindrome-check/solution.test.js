const {expect} = require('chai');
const {isPalindrome, isPalindromeRec} = require("./solution");

describe('isPalindrome Iterative:', () => {
  it('handles empty string', () => {
    expect(isPalindrome('')).to.deep.equal(true);
  });

  it('handles single letter', () => {
    expect(isPalindrome('a')).to.deep.equal(true);
  });

  it('handles two letters', () => {
    expect(isPalindrome('ab')).to.deep.equal(false);
    expect(isPalindrome('aa')).to.deep.equal(true);
  });
  it('handles odd number of letters', () => {
    expect(isPalindrome('abc')).to.deep.equal(false);
    expect(isPalindrome('aba')).to.deep.equal(true);
  });
});

describe('isPalindrome Recursive:', () => {
  it('handles empty string', () => {
    expect(isPalindromeRec('')).to.deep.equal(true);
  });

  it('handles single letter', () => {
    expect(isPalindromeRec('a')).to.deep.equal(true);
  });

  it('handles two letters', () => {
    expect(isPalindromeRec('ab')).to.deep.equal(false);
    expect(isPalindromeRec('aa')).to.deep.equal(true);
  });
  it('handles odd number of letters', () => {
    expect(isPalindromeRec('abc')).to.deep.equal(false);
    expect(isPalindromeRec('aba')).to.deep.equal(true);
  });
});