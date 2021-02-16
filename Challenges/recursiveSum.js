const utils = require("../utils");

/***************************************************
 *
 * Given an array of numbers write a recursive function
 * that would produce the sum of the array.
 *
 ***************************************************/

const input = [1, 2, 3, 4, 5, 6];
const expected = 21;

// this works but changes the original input array...
function sum(input) {
    if (input.length === 0) {
        return 0;
    }
    const current = input.pop();
    return current + sum(input);
}

function shortSum(input) {
    return input.length === 0 ? 0 : input[0] + shortSum(input.slice(1));
}

utils.expect("Recursive Sum (one liner)", shortSum(input), expected);
utils.expect("Recursive Sum", sum(input), expected);
