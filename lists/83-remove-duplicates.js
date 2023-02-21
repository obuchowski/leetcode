/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} node
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let node = head
    while(node) {
        let next = node.next
        while (next && next.val === node.val) {
            next = next.next
        }
        node.next = next
        node = next
    }

    return head
};