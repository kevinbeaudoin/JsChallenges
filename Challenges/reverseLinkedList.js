const utils = require("../utils");

/***************************************************
 *
 * Given a linked list of N nodes. The task is to reverse this list.
 *
 ***************************************************/
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    if (head.next === null) {
        return head.data;
    }
    return reverseLinkedList(head.next) + " " + head.data;
}

function reverseList(head) {
    /*
        1 -> null
        2 -> 3
        3 -> 4
        4 -> 5
        5 -> null


    */

    let prev = null; // 2 -> 1
    let current = head; // 3 -> 4
    let next = null; // 4 -> 5
    while (current.next !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    current.next = prev;
    printList(current);
}

function printList(head) {
    let current = head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}

/*
Input:
LinkedList: 1->2->3->4->5->6
Output: 6 5 4 3 2 1
*/

let last = null;
let head = null;
for (let i = 6; i >= 1; i--) {
    head = new Node(i);
    head.next = last;
    last = head;
}

utils.expect("description", reverseList(head), "6 5 4 3 2 1");
