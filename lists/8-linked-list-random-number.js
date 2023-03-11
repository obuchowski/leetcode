function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 */
const Solution = function(head) {
    this.head = head
}

/**
 * @return {number}
 */
Solution.prototype.getRandom = function()  {
    let i = 2,
        node = this.head.next,
        result = this.head.val
    while (node) {
        if (Math.random() < 1/i++) {
            result = node.val
        }
        node = node.next
    }
    return result
}