/*

Write a function 'canConstruct(target, wordBank)' that takes in a 
target string and an array of strings as arguments

The function should return a boolean indicating whether or not the 
target can be constructed by concatenating elements of wordBank array.

You may reuse elements of WordBank as many times as needed.

Examples:
canConstruct(abcdef, [ab, abc, cd, def, abcd]) => true
canConstruct(skateboard, [ska, t, cd, bor, ard]) => false

inputs:
m target length
n = array length

Brute Force:
Time: O(m^n*m)  We add *m for the replace
Space: O(m^2)  (max number of char in the target)

Memoized:
Time: O()
Space: O()

*/

const canConstruct = (target, wordBank, memo = {}) => {
    if (target in wordBank) return memo[target];
    if (target === "") return true;
    for (word of wordBank) {
        if (
            target.startsWith(word) &&
            canConstruct(target.replace(word, ""), wordBank, memo)
        ) {
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
};

console.log("Memoization");
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["ska", "t", "cd", "bor", "ard"]));
console.log(
    canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "eeee", "eeeeee", "f"])
);

/*
inputs:
m target length
n = array length

Tabulation:
Time: O(m^2*n)  We add *m for the replace
Space: O(m)  (max number of char in the target)
*/

const canConstructTab = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= target.length; i++) {
        if (!table[i]) continue;
        for (let word of wordBank) {
            if (target.substring(i, word.length) === word) {
                table[i + word.length] = true;
            }
        }
    }
    return table[target.length];
};

console.log("Tabulation");
console.log(canConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstructTab("skateboard", ["ska", "t", "cd", "bor", "ard"]));
console.log(
    canConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "eeee",
        "eeeeee",
        "f",
    ])
);
