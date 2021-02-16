/*

Write a function 'countConstruct(target, wordBank)' that takes in a 
target string and an array of strings as arguments

The function should return the number of ways the 
target can be constructed by concatenating elements of wordBank array.

You may reuse elements of WordBank as many times as needed.

Examples:
canConstruct(abcdef, [ab, abc, cd, def, abcd, ef]) => 3
canConstruct(skateboard, [ska, t, cd, bor, ard]) => 0

inputs:
m target length
n = array length

Brute Force:
Time: O(n^m * m)  
Space: O(m^2)  

Memoized:
Time: O(n * m^2)
Space: O(m^2)

*/

const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return 1;
    let constructs = 0;
    for (word of wordBank) {
        if (target.startsWith(word)) {
            constructs += countConstruct(
                target.replace(word, ""),
                wordBank,
                memo
            );
        }
    }
    memo[target] = constructs;
    return constructs;
};

console.log("Memoization");
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"]));
console.log(countConstruct("skateboard", ["ska", "t", "cd", "bor", "ard"]));
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
    countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeeee",
        "f",
        "ef",
        "eef",
    ])
);

/** 

inputs:
m target length
n = array length

Tabulation
Time: O(n^m * m)  
Space: O(m^2)  

*/
const countConstructTab = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i <= target.length; i++) {
        if (!table[i]) continue;
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }
    return table[target.length];
};

console.log("Tabulation");
console.log(
    countConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"])
);
console.log(countConstructTab("skateboard", ["ska", "t", "cd", "bor", "ard"]));
console.log(countConstructTab("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
    countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeeee",
        "f",
        "ef",
        "eef",
    ])
);
