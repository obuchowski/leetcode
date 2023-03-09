/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var createListFromArray = function (arr, pos) {
    let list = new ListNode(arr[0]);
    let current = list;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    if (pos >= 0) {
        let posNode = list;
        for (let i = 0; i < pos; i++) {
            posNode = posNode.next;
        }
        current.next = posNode;
    }
    return list;
}

var ListToArray = function (list) {
    let arr = [];
    let current = list;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycleMy = function(head) {
    const seen = new Set()
    while (head) {
        if (seen.has(head)) {
            return head
        }

        seen.add(head)
        head = head.next
    }

    return null
}

var detectCycle = function(head) {
    if (!head || !head.next) return null;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            while (slow !== head) {
                slow = slow.next;
                head = head.next;
            }
            return head;
        }
    }
    return null;
}

console.log(
        detectCycle(
            createListFromArray(
                [3,2,0,-4], 1
            )
        ).next.next
)