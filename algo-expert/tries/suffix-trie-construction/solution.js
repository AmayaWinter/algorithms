// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    let arr = string.split('');
    this.root['*'] = true;
    let curPos = this.root;
    for(let i = 0; i < arr.length; i++) {
      for(let j = i; j < arr.length; j++) {
        let letter = arr[j];
        if(curPos['*'] || !curPos[letter]) {
          curPos[letter] = {[this.endSymbol]: true};
          if(curPos['*']) {delete curPos['*'];}
          curPos = curPos[letter];
        }
        else if(curPos[letter]) {
          curPos = curPos[letter];
        }
      }
      curPos = this.root;
    }
    return this.root;
  }

  contains(string) {
    // Write your code here.
  }
}

let trie = new SuffixTrie('babc');
// console.log(trie.root);
// debugger;

module.exports = SuffixTrie;