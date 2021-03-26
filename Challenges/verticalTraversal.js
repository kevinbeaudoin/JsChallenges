const utils = require("../utils");

/***************************************************
 *
 * Some description of the problem...
 *
 ***************************************************/

function verticalOrder(root) {
    /*
    Level -2  -1  0  1  2
                  1
               2.    3
            4     5.   6
        
        
    -2: 4
    -1: 2
    0: 1, 5
    1: 3
    2: 6
    */
    let map = {};
    mapLevel(root, 0, map);
    let keys = Object.keys(map)
        .map((x) => parseInt(x))
        .sort((a, b) => (a < b ? -1 : 1));
    let result = [];
    for (key of keys) {
        result = [...result, ...map[key]];
    }
    return result;
}

function mapLevel(root, level, map) {
    if (!root) {
        return;
    }

    map[level] = map[level] ? [...map[level], root.data] : [root.data];
    mapLevel(root.left, level - 1, map);
    mapLevel(root.right, level + 1, map);
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.right = new Node(6);

utils.expect("", verticalOrder(root), [4, 2, 1, 5, 3, 6]);
