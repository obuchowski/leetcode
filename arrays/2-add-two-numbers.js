/**
 * @param ListNode l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0,
        root = new ListNode(),
        current = root
    while (l1 || l2 || carry) {
        let sum = carry
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }

        carry = sum > 9 ? 1 : 0
        current = current.next = new ListNode(sum % 10)
    }
    return root.next;
};