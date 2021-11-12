/**
 *
 * @param integers
 *
 * goal: find the odd number if the rest are evens, or find the even number if the rest are odd
 * given: integers.length >= 3
 * figure out what type of outlier we're looking for
 * iterate through array until we find it and return it
 *
 */
function findOutlier(integers) {
    let outlierType = integers.slice(0,3).filter(val => val % 2 === 0).length >= 2 ? 1 : 0;
    return integers.find((num, i) => Math.abs(num) % 2 === outlierType);
}



// console.log(findOutlier([0, 1, 2]));
// console.log(findOutlier([189630838,187569938,-57434100,-104731518,-61512062,127752656,-41548018,-107071156,169009596,-3406134,-43532984,-168683043,-11247578,-192938452]));
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2,6,8,10,3]));
// console.log(findOutlier([0,0,3,0,0]));
// console.log(findOutlier([1,1,0,1,1]));
// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));

let temp = [0,0,3,0,0];
temp.splice(2,0,1)
console.log(temp);