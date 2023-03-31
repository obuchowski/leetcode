// TOPIC: DFS, BFS, UNION-FIND, GRAPH
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
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const union = new UnionSet()
    for (const road of roads) {
        union.add(road[0])
        union.add(road[1])
    }

    for (const road of roads) {
        union.union(road[0], road[1])
    }

    const correctRoot = union.find(n)
    let minRoad = Number.MAX_VALUE
    for (const road of roads) {
        if (road[2] < minRoad && union.find(road[0]) === correctRoot) {
            minRoad = road[2]
        }
    }

    return minRoad
};

console.log(
    minScore(20, [[18,20,9207],[14,12,1024],[11,9,3056],[8,19,416],[3,18,5898],[17,3,6779],[13,15,3539],[15,11,1451],[19,2,3805],[9,8,2238],[1,16,618],[16,14,55],[17,7,6903],[12,13,1559],[2,17,3693]])
)