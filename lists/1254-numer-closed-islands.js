// TOPIC: DFS, BFS, UNION-FIND, MATRIX
function UnionSet() {
    this.parents = []

    this.add = a => {
        this.parents[a] = a
    }

    this.union = (a, b) => {
        const parentA = this.find(a)
        const parentB = this.find(b)
        this.parents[parentB] = parentA
    }

    this.find = a => {
        if (this.parents[a] !== a) {
            this.parents[a] = this.find(this.parents[a])
        }
        return this.parents[a]
    }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const union = new UnionSet()

    // how many padStart?
    const magnitude = Math.ceil(Math.log10(grid[0].length))

    const getIndex = (i, j) => parseInt(String(i) + String(j).padStart(magnitude, '0'))

    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                const index = getIndex(i, j)
                union.add(index)

                //union with prevs lands
                if (i > 0 && grid[i - 1][j] === 0) {
                    const prevColIndex =getIndex(i - 1, j)
                    union.union(index, prevColIndex)
                }
                if (j > 0 && grid[i][j - 1] === 0) {
                    const prevLineIndex = getIndex(i, j - 1)
                    union.union(index, prevLineIndex)
                }
            }
        }
    }

    const validIslandRoots = []
    for (let i= 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) {
                const index = getIndex(i, j)
                const parent = union.find(index)

                if (validIslandRoots[parent] !== 0) {
                    // if land is near border mark the whole island as incorrect
                    if (i === 0 || (i === grid.length - 1) || j === 0 || (j === grid[i].length - 1)) {
                        validIslandRoots[parent] = 0
                    } else (
                        // undefined => 1
                        validIslandRoots[parent] = 1
                    )
                }
            }
        }
    }

    return validIslandRoots.reduce((sum, value) => {
        return sum + value
    }, 0)
}

console.log(closedIsland([[0,0,1,0,0],
                               [0,1,0,1,0],
                               [0,1,1,1,0]]))