/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}

const levelOrder = (root) => {
    const queue = [root],
        result = []
    while (queue.length) {
        const currLevel = [],
            length = queue.length
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            if (node !== null) {
                currLevel.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }

        !currLevel.length || result.push(currLevel)
    }

    return result
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderMy = function(root, level = 0) {
    if (root === null) {
        return []
    }

    const current = []
    current[level++] = [root.val]
    const left = levelOrder(root.left, level)
    const right = levelOrder(root.right, level)
    for (const child of [left, right]) {
        for (const levelKey in child) {
            current[levelKey]
                ? current[levelKey].push(...child[levelKey])
                : current[levelKey] = child[levelKey]
        }
    }

    return current
}

console.log(levelOrder(new TreeNode(5, new TreeNode(9), new TreeNode(8))))