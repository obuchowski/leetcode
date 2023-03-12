/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head, tail = null) {
    if (head === tail) return null

    let slow = head,
        fast = head
    while (fast !== tail && fast.next !== tail) {
        slow = slow.next
        fast = fast.next.next
    }

    return new TreeNode(
        slow.val,
        sortedListToBST(head, slow),
        sortedListToBST(slow.next, tail)
    )
}