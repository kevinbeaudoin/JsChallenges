/*
Write a fucntion 'howSum(targetSum, numbers)' that takes in a 
targetSum and an array of numbers as arguments

The function should return an array containing any combinaition of 
elements that add up to exactly the targetSum.  If there is no combination 
that adds up to the targerSum, retrurn null.

If there are multiple combinations possible, you may return any single one.

Examples:
howSum(7, [5, 3, 4]) => [4, 3]
howSum(8, [5, 4, 3]) => [5, 3]
howSum(7, [2, 4]) => null

Algo similar to canSum except we return the combination array.

*/

// inputs: m target sum and n = array length
//
// Brute Force:
// Time: O(n^m * m)
// Space: O(m)
//
// Memoized:
// Time: O(n*m*m) => O(n*m^2)
// Space: O(m^2)
const howSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;
    for (let number of numbers) {
        const combination = howSum(target - number, numbers, memo);
        if (combination !== null) {
            memo[target] = [number, ...combination];
            return memo[target];
        }
    }

    memo[target] = null;
    return null;
};

console.log("Memoization");
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(8, [5, 4, 3]));
console.log(howSum(7, [2, 4]));
console.log(howSum(10, [2, 4]));
console.log(howSum(300, [7, 14, 50]));

/*


*/

/*
Inputs: 
m: target sum 
n: array length

Time: O(m^2*n)
Space: O(m)

*/
const howSumTab = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= target; i++) {
        if (table[i] === null) continue;
        for (let num of numbers) {
            // we skip if we already have a way to compute it since we return any valid solution...
            if (num + i <= target && table[num + i] === null) {
                table[num + i] = [...table[i], num];
            }
        }
    }
    return table[target];
};

console.log("Tabulation");
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(8, [5, 4, 3]));
console.log(howSum(7, [2, 4]));
console.log(howSum(10, [2, 4]));
console.log(howSum(300, [7, 14, 50]));
