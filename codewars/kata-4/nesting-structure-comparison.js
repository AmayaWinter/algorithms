Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
 debugger;
    let sameStructure = true;
    
    if(!Array.isArray(other)) {
        return false;
    }
    else if(Array.isArray(other)) {
        for (let i = 0; i < this.length; i++) {
            if(Array.isArray(other)) {
                if(Array.isArray(this[i]) && Array.isArray(other[i])) {
                    if(this[i].length === other[i].length) {
                        if(this.length > 0) {
                            sameStructure = sameStructure && this[i].sameStructureAs(other[i]);
                        }
                        else
                        {
                            sameStructure = true;
                        }
                    }
                    else
                    {
                        sameStructure = false;
                    }
                }
                else if(!Array.isArray(this[i]) && !Array.isArray(other[i])) {
                    sameStructure = true;
                }
                else
                {
                    sameStructure = false;
                }
            }
            else
            {
                return false;
            }
        }
    }
  return sameStructure;
};

console.log([1,[1,1]].sameStructureAs(1));
//console.log([1,[1,1]].sameStructureAs([2,[2]]));

// console.log([ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] ));          
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] ));  

//  // should return false 
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] ));  
// console.log([ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] ));  

// // should return true
// console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] )); 

// // should return false
// console.log([ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] ));  

// console.log(
//     [ 
//         [ 
//             [ ], 
//             [ ] 
//         ] 
//     ].sameStructureAs( 
//     [ 
//         [ 
//             [ ], 
//             [ ] 
//         ] 
//     ] ));
