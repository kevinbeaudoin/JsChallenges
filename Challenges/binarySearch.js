const utils = require("../utils");

/***************************************************
 *
 * When a collection is sorted, we can iteratively or recursively
 * check our desired value against the middle item, discarding the
 * half where we know our value cannot exist. In effect, our target
 * can be found in logarithmic time and constant space.
 *
 ***************************************************/

const input = [1, 6, 20, 20, 35, 44, 52, 6, 72, 8, 91, 10, 101, 124, 13, 146];

function search(numbers, value) {
    // item can't be found in empty array
    if (!numbers || numbers.length === 0) {
        return false;
    }

    // if only one entry check if value if that single entry
    if (numbers.length === 1) {
        return value === numbers[0];
    }

    //check the middle value of the array if value is smaller, search in left part otherwise right
    const center = Math.floor(numbers.length / 2);
    if (numbers[center] === value) {
        return true;
    }
    if (numbers[center] > value) {
        return search(numbers.slice(0, center), value);
    } else {
        return search(numbers.slice(center), value);
    }
}
utils.expect(
    "search 52",
    search(
        input.sort((a, b) => (a === b ? 0 : a < b ? -1 : 1)),
        52
    ),
    true
);
utils.expect(
    "search 60",
    search(
        input.sort((a, b) => (a === b ? 0 : a < b ? -1 : 1)),
        60
    ),
    false
);
