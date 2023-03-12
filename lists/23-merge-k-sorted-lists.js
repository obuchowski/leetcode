/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const Queue = function () {
        const heap = []

        /**
         * @param {ListNode} node
         */
        const push = function (node) {
            /**
             * @param {number} val
             * @param {number} l
             * @param {number} r
             */
            const getPosition = (val, l, r) => {
                while (l <= r) {
                    const m = l + Math.trunc((r - l) / 2)
                    if (this.heap[m].val < val) {
                        r = m - 1
                    } else {
                        l = m  + 1
                    }
                }

                return l
            }

            const position = getPosition(node.val, 0, this.heap.length - 1)
            this.heap.splice(position, 0, node)
        }

        const pop = function () {
            return this.heap.pop()
        }

        const length = function () {
            return this.heap.length
        }

        return { heap, push, pop, length }
    }

    const queue = new Queue()

    for (const list of lists) {
        if (list) {
            queue.push(list)
        }
    }

    let result = new ListNode(),
        node = result
    while (queue.length()) {
        node.next = queue.pop()
        node = node.next
        if (node.next) {
            queue.push(node.next)
        }
    }

    return result.next
}

console.log(mergeKLists([null, null]))
