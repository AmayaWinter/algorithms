function towerBuilder(nFloors) {
  debugger;
    // build here
    let tower = [];
    let foundation = (nFloors-1) + (nFloors-1) +1;
    for(let curFloor = 0; curFloor < nFloors; curFloor++)
    {
      let numBlocks = curFloor+curFloor+1;
      let padding = (foundation - numBlocks) / 2;
        
      tower.push(' '.repeat(padding) + '*'.repeat(numBlocks) + ' '.repeat(padding));
    }
    return tower;
  }
  
  console.log(towerBuilder(2));
/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

*/