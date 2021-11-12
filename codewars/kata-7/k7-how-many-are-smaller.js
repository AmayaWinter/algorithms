/**
 *
 * @param {Number[]} nums
 */
function smaller(nums) {
    let smallerArr = [];
    for(let i = 0; i < nums.length; i++) {
        let curVal = nums[i];
        let smallerNums = 0;
        for(let j = i; j < nums.length; j++) {
            if(curVal > nums[j]) {
                smallerNums++;
            }
        }
        smallerArr.push(smallerNums);
    }
    return smallerArr;
}

// const smaller = a => {
//     const result = [];
//     let root = null;
//     for (let i = a.length - 1; i >= 0; i--) {
//         root = insert(a[i], root, result, i, 0);
//         // console.log(`root val: ${root.value}`);
//     }
//     console.log(root);
//     return result;
// }
//
// const insert = (n, node, r, i, s) => {
//     // console.log('n', n, 's', s);
//     if (node === null) {
//         console.log('creating node for ', n);
//         node = new Node(n, 0);
//         r[i] = s;
//     } else if (node.value === n) {
//         node.count++;
//         r[i] = s + node.sum;
//     } else if (node.value > n) {
//         console.log(`sending ${n} as left node of ${node.value}`);
//         node.sum++;
//         node.left = insert(n, node.left, r, i, s);
//     } else {
//         console.log(`sending ${n} as right node of ${node.value}`);
//         node.right = insert(n, node.right, r, i, s + node.count + node.sum);
//     }
//     return node;
// }
//
// class Node {
//     constructor (v, s) {
//         this.value = v;
//         this.sum = s;
//         this.count = 1;
//         this.right = null;
//         this.left = null;
//     }
// }

// console.log(smaller([5, 4, 3, 2, 1]));
// console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6]));
console.log(smaller([7,5,3,4,7,6,3]));



/**
 * Write

 function smaller(arr)
 that given an array arr, you have to return the amount of numbers that are smaller than arr[i] to the right.

 For example:

 smaller([5, 4, 3, 2, 1]) === [4, 3, 2, 1, 0]
 smaller([1, 2, 0]) === [1, 1, 0]
 If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
 */