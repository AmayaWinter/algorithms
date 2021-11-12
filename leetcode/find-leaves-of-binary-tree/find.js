function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const findLeaves = function (root) {
  let leaves = [];
  function dfs(node) {
    if(node === null) {
      return -1; //we're outside the tree
    }
    let leftHeight = dfs(node.left);
    let rightHeight = dfs(node.right);
    let height = Math.max(leftHeight, rightHeight) + 1;
    if(!leaves[height]) leaves[height] = [];
    leaves[height].push(node.val);
    return height;
  }
  dfs(root);
  return leaves;
}

let four = new TreeNode('4');
let five = new TreeNode('5');

let three = new TreeNode('3');

let two = new TreeNode('2', four, five);
let one = new TreeNode('1', two, three);

console.log(findLeaves(one));

