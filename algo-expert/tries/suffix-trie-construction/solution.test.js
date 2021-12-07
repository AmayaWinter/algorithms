const {expect} = require("chai");
const SuffixTrie = require('./solution')

describe('Suffix Trie Construct', () => {
  it('can construct trie', () => {
    let trie = new SuffixTrie('babc');
    let expectedOutput = {
      b: {
        a: {b: {c: {[trie.endSymbol]: true}}},
        c: {[trie.endSymbol]: true},
      },
      a: {b: {c: {[trie.endSymbol]: true}}},
      c: {[trie.endSymbol]: true}
    }
    expect(trie.root).to.deep.equal(expectedOutput);
  });
});