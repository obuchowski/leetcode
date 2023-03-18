function ListNode(val, prev) {
    this.val = (val===undefined ? 0 : val)
    this.prev = (prev===undefined ? null : prev)
    this.next = null
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.current = new ListNode(homepage)
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.current.next = new ListNode(url, this.current)
    this.current = this.current.next
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    while(this.current.prev !== null && steps--) {
        this.current = this.current.prev
    }

    return this.current.val
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while(this.current.next !== null && steps--) {
        this.current = this.current.next
    }

    return this.current.val

};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */