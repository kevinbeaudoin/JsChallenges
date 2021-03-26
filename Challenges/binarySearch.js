const utils = require("../utils");

/***************************************************
 *
 * When a collection is sorted, we can iteratively or recursively
 * check our desired value against the middle item, discarding the
 * half where we know our value cannot exist. In effect, our target
 * can be found in logarithmic time and constant space.
 *
 ***************************************************/

/*
Repeat:
    - Cut the input array in half and check if present in first or second portion
    - Since array is sorted we can discard half the array everytime.
Example:
    - Looking for 101  in [1, 6, 20, 20, 35, 44, 52, 6, 72, 8, 91, 10, 101, 124, 13, 146]
    - Sort it [1, 6, 6, 8, 10, 13, 20, 20, 35, 44, 52, 72, 91, 101, 124, 146]
    - Check against the middle value [8] (35)
    - Is 101 === 35 no
    - Is 101 > 35 ? yes then we search in [44, 52, 72, 91, 101, 124, 146]
    - Is 101 === 91 ? no
    - Is 101 > 91 ? yes we search in [101, 124, 146]
    - Is 101 === 124? no
    - is 101 > 124 ? no we search in [101]
    - Is 101 === 101 Yes we found it return true.
    
    - If we would end up with an empty array or an array that has only one value different than the one we were looking for, we return false.

Code:

*/

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
