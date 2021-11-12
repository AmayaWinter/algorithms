/**
 *
 * @param walk
 * @returns {boolean}
 *
 * approach is to add the x,y coordinates given and they should equal 0,0 if we got back to the origin point
 * if there are more than 10 directions, then the walk is too long
 */
function isValidWalk(walk) {
    if(walk.length !== 10) {
        return false;
    }
    let pathIsGood = false;
    let x = 0, y = 0;
    let dirs = {
        'n': [0,-1],
        'e': [1,0],
        's': [0,1],
        'w': [-1,0]
    }
    walk.forEach(direction => {
        x += dirs[direction][0];
        y += dirs[direction][1];
    });
    if(x === 0 & y === 0) {
        pathIsGood = true;
    }

    return pathIsGood;
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']),);
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']),);



/**
 * https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript
 * You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

 Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
 */