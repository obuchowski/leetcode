function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var createListFromArray = function (arr) {
    let list = new ListNode(arr[0]);
    let current = list;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
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

function reverse(head) {
    let prev = null;
    let cur = head;
    while (cur) {
        let tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }
    return prev;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const listEnds = (l1, l2) => {
        if (l1 === null || l2 === null) {
            return [l1, l2]
        }
        return listEnds(l1.next, l2.next)
    }

    let [l1End, l2End] = listEnds(l1, l2)
    while (l1End) {
        l1End = l1End.next
        l2 = new ListNode(0, l2)
    }
    while (l2End) {
        l2End = l2End.next
        l1 = new ListNode(0, l1)
    }

    const addRecursive = (l1, l2) => {
        if (l1 === null) {
            return null
        }
        const prevNode = addRecursive(l1.next, l2.next),
            value = l1.val + l2.val + prevNode.val
        prevNode.val = value % 10
        return new ListNode(value > 9 ? 1 : 0, prevNode)
    }

    const sumList = addRecursive(l1, l2)
    return (sumList.val === 0 && sumList.next) ? sumList.next : sumList
}

const result = addTwoNumbers(createListFromArray([9,9,9,9]),createListFromArray([9]))
console.log(ListToArray(result))

