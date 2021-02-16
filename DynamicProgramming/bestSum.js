/*
Write a fucntion 'bestSum(targetSum, numbers)' that takes in a 
targetSum and an array of numbers as arguments

The function should return an array containing the shortest combinaition of 
elements that add up to exactly the targetSum.

If there are multiple combinations of same length, you may return any single one.

Examples:
bestSum(7, [5, 3, 4, 7]) => [7]
howSum(8, [2, 4, 3]) => [4, 4]
howSum(7, [2, 4]) => null

Algo similar to howSum except we return the shortest combination...

*/

// inputs:
// m target sum
// n = array length
//
// Brute Force:
// Time: O(n^m * m)
// Space: O(m^2)
//
// Memoized:
// Time: O(m^2 * n)
// Space: O(m^2)
//
const bestSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return [];
    if (target < 0) return null;

    let shortestCombination = null;
    for (let number of numbers) {
        const combination = bestSum(target - number, numbers, memo);
        if (combination !== null) {
            const newCandidate = [number, ...combination];
            if (
                shortestCombination === null ||
                shortestCombination.length >= newCandidate.length
            ) {
                shortestCombination = newCandidate;
            }
        }
    }
    memo[target] = shortestCombination;
    return shortestCombination;
};

console.log("Memoization");
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [5, 4, 3]));
console.log(bestSum(7, [2, 4]));
console.log(bestSum(10, [2, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));

/*
Tabulation...

Inputs: 
m: target sum 
n: array length

Time: O(m^2*n)
Space: O(m)

*/
const bestSumTab = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= target; i++) {
        if (!table[i]) continue;
        for (let num of numbers) {
            if (num + i <= target && !table[num + i]) {
                const newSum = [...table[i], num];
                if (!table[num + i] || table[num + 1].length > newSum.lenght) {
                    table[num + i] = newSum;
                }
            }
        }
    }
    return table[target];
};

console.log("Tabulation");
console.log(bestSumTab(7, [5, 3, 4, 7]));
console.log(bestSumTab(8, [5, 4, 3]));
console.log(bestSumTab(7, [2, 4]));
console.log(bestSumTab(10, [2, 4, 5]));
console.log(bestSumTab(100, [1, 2, 5, 25]));
