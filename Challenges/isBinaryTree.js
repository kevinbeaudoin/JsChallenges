const utils = require("../utils");

/***************************************************
 *
 * Check if a given tree is a binary tree
 * - A binary tree only has a left and right child
 * - left child value is always smaller than node value itself.
 * - right child value is always greater that node value itself.
         15
      10   20
    5  12 4 25
      11
 *
 ***************************************************/

/*
interface Node {
    left: Node; //Pointer on left child
    right: Node; //Pointer on right child
    value:number; //the value number
};
*/

function isBST(root, min = null, max = null) {
    if (root === null) {
        return true;
    }

    if (
        (max !== null && root.data >= max) ||
        (min !== null && root.data <= min)
    ) {
        return false;
    }

    return (
        isBST(root.left, min, root.data) && isBST(root.right, root.data, max)
    );
}

function isBinaryTree2(node, minValue = -999, maxValue = 999) {
    // A tree formed of a single node or no nodes at all is a binary tree...
    if (!node) {
        return true;
    }

    // To be a binary tree, current node value must be between left and right value.
    // Left value node must be smaller than any parents node.
    if (node.value < minValue || (node.left && node.value < node.left.value)) {
        return false;
    }

    // Left value node must be smaller than any parents node.
    if (
        node.value > maxValue ||
        (node.right && node.value > node.right.value)
    ) {
        return false;
    }

    // Left and right sub trees must also be binary tree for the entire tree to be a binary tree.
    return (
        isBinaryTree(node.left, minValue, node.value) &&
        isBinaryTree(node.right, node.value, maxValue)
    );
}

const binaryTree = { value: 15 };
binaryTree.left = { value: 10 };
binaryTree.right = { value: 20 };
binaryTree.left.left = { value: 5 };
binaryTree.left.right = { value: 12 };
binaryTree.left.right.left = { value: 11 };
binaryTree.right.left = { value: 18 };
binaryTree.right.right = { value: 25 };
utils.expect("isBinaryTree to be true:", isBinaryTree(binaryTree), true);

/*
        15
    10      20
  5   12  4   25
    11
*/
const regularTree = { value: 15 };
regularTree.left = { value: 10 };
regularTree.right = { value: 20 };
regularTree.left.left = { value: 5 };
regularTree.left.right = { value: 12 };
regularTree.left.right.left = { value: 11 };
regularTree.right.left = { value: 4 };
regularTree.right.right = { value: 25 };
utils.expect("isBinaryTree to be false:", isBinaryTree(regularTree), false);
