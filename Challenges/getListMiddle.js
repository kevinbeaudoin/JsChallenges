const utils = require("../utils");

/***************************************************
 *
 * Given a linked list of N nodes. The task is to find the middle element in the list.
 *
 * Approach:
 *   - We keep 2 pointer one that increment twice as fast as the other.
 *   - When the fastest one reaches the end, we've reached the middle witht the first one.
 *
 ***************************************************/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function getListMiddle(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
        if (fast !== null) {
            fast = fast.next;
        }
    }
    return slow.data;
}

/*
Input:
LinkedList: 1->2->3->4->5->6
            s
            f
               s
                  f
                  s
                        f
                     
Output: 4
*/

/*
Input:
LinkedList: 1->2->3->4->5
Output: 3
*/

let last = null;
let head = null;
for (let i = 6; i >= 1; i--) {
    head = new Node(i);
    head.next = last;
    last = head;
}

utils.expect("description", getListMiddle(head), 4);

last = null;
head = null;
for (let i = 5; i >= 1; i--) {
    head = new Node(i);
    head.next = last;
    last = head;
}
utils.expect("description", getListMiddle(head), 3);
