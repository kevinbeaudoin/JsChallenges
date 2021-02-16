// Get the nth fibonacci number fib(n)
// n:     1 2 3 4 5 6 7 8 9
// value: 1 1 3 5 8 13 21 34
// Base cases: when n is <= 2 we always return 1.

// Simple recursive solution
// time: O(2 exp n)
// space: O(n)
const fib = (n) => {
    if (n <= 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
};
// console.log(fib(50));

// Let's improve it using memoization
// time: O(n)
// space: O(n)
const fibMemo = (n, memo = {}) => {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 2) {
        return 1;
    }
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
};
console.log(fibMemo(50));

// Let's solve this using a loop instead of recursivity.
// time: O(n)
// space: O(n)
const fibLoop = (n) => {
    const result = new Array(n + 1).fill(0);
    result[1] = 1;
    for (let i = 0; i <= n; i++) {
        result[i + 1] += result[i];
        result[i + 2] += result[i];
    }
    return result[n];
};
console.log(fibLoop(6));
