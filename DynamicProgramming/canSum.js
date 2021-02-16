/*
Write a fucntion 'canSum(targetSum, numbers)' that takes in a 
targetSum and an array of numbers as arguments

The function should return a boolean indicating whether or not 
it is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are nonnegative.


Examples:
canSum(7, [5, 3, 4, 7]) => true
canSum(8, [5, 6, 4, 7]) => true
canSum(7, [2, 4]) => false

*/

// inputs: m target sum and n = array length
// height of the tree is m
// Time: O(n^m) -> O(m * n)
// Space: O(m)
const canSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;
    for (let i of numbers) {
        memo[target] = canSum(target - i, numbers, memo);
        if (memo[target]) {
            return true;
        }
    }
    return false;
};

console.log("Memoization");
console.log(canSum(8, [5, 6, 3, 4]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(8, [5, 6, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(300, [7, 14]));

/*

m target sum
n length of number array

Time: O(mn)
Space: O(m)

Time
*/
const canSumTab = (target, numbers) => {
    const table = Array(target + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= target; i++) {
        if (!table[i]) continue;
        for (let number of numbers) {
            if (number + i <= target) {
                table[number + i] = true;
            }
        }
    }
    return table[target];
};

console.log("Tabulation");
console.log(canSumTab(8, [5, 6, 3, 4]));
console.log(canSumTab(7, [5, 3, 4, 7]));
console.log(canSumTab(8, [5, 6, 4, 7]));
console.log(canSumTab(7, [2, 4]));
console.log(canSumTab(300, [7, 14]));
