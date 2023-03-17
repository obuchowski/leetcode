var TrieNode = function() {
    this.children = new Array(26)
    this.isEnd = false
}

TrieNode.prototype.get = function(key) {
    return this.children[key.charCodeAt(0) - 97]
}

TrieNode.prototype.set = function(key) {
    const i = key.charCodeAt(0) - 97
    if (undefined === this.children[i]) {
        this.children[i] = new TrieNode()
    }

    return this.children[i]
}

var Trie = function() {
    this.root = new TrieNode()
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
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
Trie.prototype.search = function(word) {
    const node = this.lookup(word)
    return node !== null && node.isEnd
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.lookup(prefix) !== null
};

/**
 * @param {string} prefix
 * @return {TrieNode}
 */
Trie.prototype.lookup = function(prefix) {
    let node = this.root
    for (const char of prefix) {
        node = node.get(char)
        if (node === undefined) {
            return null
        }
    }

    return node
}

var obj = new Trie()
obj.insert('')
var param_2 = obj.search('hotdog')
var param_3 = obj.startsWith('dog')
