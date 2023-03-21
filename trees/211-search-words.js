// TOPIC: DFS, DESIGN, TRIE, STRING

var TrieNode = function() {
    this.children = new Array(26)
    this.isEnd = false
}

TrieNode.prototype.get = function(key) {
    if (key === '.') return this.children.filter(Boolean)
    const i = key.charCodeAt(0) - 97
    return this.children[i] ? [this.children[i]] : []
}

TrieNode.prototype.set = function(key) {
    const i = key.charCodeAt(0) - 97
    if (undefined === this.children[i]) {
        this.children[i] = new TrieNode()
    }

    return this.children[i]
}

var WordDictionary = function() {
    this.root = new TrieNode()
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root
    for (const char of word) {
        node = node.set(char)
    }
    node.isEnd = true
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let nodes = [this.root]
    for (let i = 0; i < word.length; i++) {
        if (nodes.length === 0) return false
            const nextNodes = []
            for (const node of nodes) {
                nextNodes.push(... node.get(word[i]))
            }
            nodes = nextNodes
    }

    for (const node of nodes) {
        if (node.isEnd)  {
            return true
        }
    }

    return false
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

var obj = new WordDictionary()
obj.addWord('abc')
obj.addWord('acc')
obj.addWord('wc')
console.log(obj.search('.c'))
