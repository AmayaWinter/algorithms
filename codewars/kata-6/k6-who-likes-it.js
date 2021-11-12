/**
 *
 * @param {String[]} names
 * determine the suffix
 * determine the pattern to display the names
 * assemble the likeStr based on the pattern
 */
function likes(names) {
    let likeFront = '';
    let likeEnd = names.length >= 2 ? 'like this' : 'likes this';

    if(names.length === 0) {
        likeFront = 'no one';
    }
    if(names.length === 1) {
        likeFront = names[0];
    }
    else if(names.length === 2) {
        likeFront = names.join(' and ');
    }
    else if(names.length === 3) {
        likeFront = names.slice(0,2).join(', ') + ' and ' + names.slice(-1);
    }
    else if(names.length > 3) {
        likeFront = names.slice(0,2).join(', ') + ` and ${names.length-2} others`;
    }

    return likeFront + ' ' + likeEnd;
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));