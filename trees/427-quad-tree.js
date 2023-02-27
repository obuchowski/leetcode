// Definition for a QuadTree node.
function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
    this.val = val;
    this.isLeaf = isLeaf;
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
};

function TreeToArray(root) {
    if (root == null) return [];
    let result = [];
    let queue = [root];
    while (queue.length > 0) {
        let node = queue.shift();
        if (node == null) {
            result.push(null);
            continue;
        }
        result.push([node.isLeaf, node.val]);
        queue.push(node.topLeft);
        queue.push(node.topRight);
        queue.push(node.bottomLeft);
        queue.push(node.bottomRight);
    }
    return result;
}
/**
 * @param {number[][]} grid
 * @return {Node}
 */
var constructMy = function(grid) {
    if (grid.length === 1) {
        return new Node(grid[0][0], 1)
    }

    let allFalse,
        allTrue
    for (let i = 0; i < grid.length; i++) {
        allFalse = grid[i].every((value) => value === 0)
        if (!allFalse) {
            break;
        }
    }

    if (allFalse) {
        return new Node(0, 1)
    }

    for (let i = 0; i < grid.length; i++) {
        allTrue = grid[i].every((value) => value === 1)
        if (!allTrue) {
            break;
        }
    }

    if (allTrue) {
        return new Node(1, 1)
    }

    const q1 = [],
        q2 = [],
        q3 = [],
        q4 = []
    for (let i = 0; i < grid.length / 2; i++) {
        q1[i] = []
        for (let j = 0; j < grid.length / 2; j++) {
            q1[i].push(grid[i][j])
        }
    }
    for (let i = 0; i < grid.length / 2; i++) {
        q2[i] = []
        for (let j = grid.length / 2; j < grid.length; j++) {
            q2[i].push(grid[i][j])
        }
    }
    for (let i = grid.length / 2; i < grid.length; i++) {
        const line = i - grid.length / 2
        q3[line] = []
        for (let j = 0; j < grid.length / 2; j++) {
            q3[line].push(grid[i][j])
        }
    }
    for (let i = grid.length / 2; i < grid.length; i++) {
        const line = i - grid.length / 2
        q4[line] = []
        for (let j = grid.length / 2; j < grid.length; j++) {
            q4[line].push(grid[i][j])
        }
    }

    return new Node(
        1,
        0,
        constructMy(q1),
        constructMy(q2),
        constructMy(q3),
        constructMy(q4),
    )
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function(grid) {
    const Leaf0 = new Node(0, true)
    const Leaf1 = new Node(1, true)

    function makeTree(grid, x = 0, y = 0, dimension = grid.length) {
        if (dimension === 1) {
            if (grid[y][x] === 1) {
                return Leaf1
            } else {
                return Leaf0
            }
        }

        const tl = makeTree(grid, x, y, dimension / 2);
        const tr = makeTree(grid, x + dimension / 2, y, dimension / 2);
        const bl = makeTree(grid, x, y + dimension / 2, dimension / 2);
        const br = makeTree(grid, x + dimension / 2, y + dimension / 2, dimension / 2);

        if (tl !== null && Object.is(tl, tr) && Object.is(tr, bl) && Object.is(bl, br)) {
            return tl;
        }

        return new Node(null, false, tl, tr, bl, br);
    }

    return makeTree(grid)
}

console.log(TreeToArray(construct([[1,1],[1,1]])))