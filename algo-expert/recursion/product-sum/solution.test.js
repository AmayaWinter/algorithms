const {expect} = require("chai");
const {productSum, productSumReduce} = require("./solution.js");

describe.only("Product Sum:", function () {
  describe("productSum():", function() {
    it("should handle 1 dimensional arrays", function () {
      expect(productSum([1, 2, 3])).to.equal(6);
      expect(productSum([1, -2, 3])).to.equal(2);
    });
    it("should handle 2 dimensional arrays", function () {
      expect(productSum([1, 2, 3, [4, 5]])).to.equal(24);
    });
    it("should handle deep nesting", function () {
      expect(productSum([1, 2, [3, 4, [5, 6]]])).to.equal(83);
    });
  });

  describe("productSumReduce():", function() {
    it("should handle 1 dimensional arrays", function () {
      expect(productSumReduce([1, 2, 3])).to.equal(6);
      expect(productSumReduce([1, -2, 3])).to.equal(2);
    });
    it("should handle 2 dimensional arrays", function () {
      expect(productSumReduce([1, 2, 3, [4, 5]])).to.equal(24);
    });
    it("should handle deep nesting", function () {
      expect(productSumReduce([1, 2, [3, 4, [5, 6]]])).to.equal(83);
    });
  });
})