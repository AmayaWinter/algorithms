function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let addTwoNumbers = function(l1, l2) {
    function getNum(list) {
        let num = '';
        if(list.next === null) {
            return String(list.val);
        }
        return num.concat(String(list.val)) + getNum(list.next);
    }
    function createReverseLinkedList(numStr) {
        if(numStr.length === 1)
        {
            return new ListNode(numStr);
        }
        return new ListNode(numStr[numStr.length-1], createReverseLinkedList(numStr.slice(0,-1))); 
    }
    
    function add(num1, num2) {
        let total = [], carry = 0, sum = 0;
        let len = num1.length >= num2.length ? num1.length : num2.length;
    
        for(let i = 0; i < len; i++) {
            sum = carry + (num1[i] !== undefined ? Number(num1[i]) : 0) + (num2[i] !== undefined ? Number(num2[i]) : 0);
            carry = sum / 10 >= 1 ? 1 : 0
            total.unshift(sum%10);
        }
        if(carry >= 1) {
            total.unshift(carry);
        }
        return total;
    }
    
    return createReverseLinkedList(add(getNum(l1), getNum(l2)).join('')) ;
}




let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 =  new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2));

/*
https://leetcode.com/problems/add-two-numbers/
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.
*/