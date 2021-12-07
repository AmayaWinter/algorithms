const {expect} = require("chai");
const isValidSubsequence = require("./solution");

describe("isValidSubsequence:", function() {
  const arr = [7 ,10 ,3 ,2 ,-1 ,3, 45 ,13, 23];
  it("should validate single", () => {
    expect(isValidSubsequence(arr, [2])).to.deep.equal(true);
    expect(isValidSubsequence(arr, [100])).to.deep.equal(false);
  })
  it("should validate sub seqeuences with repeated numbers", function() {
    expect(isValidSubsequence(arr, [7,3,3,13])).to.deep.equal(true);
  });
  it("should validate subsequence if it's equal to entire search array", function() {
    expect(isValidSubsequence(arr, arr)).to.deep.equal(true);
  });
});