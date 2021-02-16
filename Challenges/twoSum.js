const utils = require("../utils");

/***************************************************
 *
 * Given an array of numbers, return all pairs that add up
 * to a given sum. The numbers can be used more than once.
 *
 * Base cases
 * - if target sum is 0 I should return [[]]
 *
 *
 ***************************************************/

const input = [1, 2, 2, 3, 4];
const targetSum = 4;
const expected = [
    [2, 2],
    [3, 1],
];

function twoSum(targetSum, numbers) {
    if (targetSum == 0) {
        return [[]];
    }

    const result = [];
    const numbersSet = new Set();
    for (let num of numbers) {
        const remainder = targetSum - num;
        if (numbersSet.has(remainder)) {
            result.push([num, remainder]);
        }
        numbersSet.add(num);
    }

    return result;
}
utils.expect("twoSums", twoSum(targetSum, input), expected);
