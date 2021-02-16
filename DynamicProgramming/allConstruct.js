/*

Write a function 'allConstruct(target, wordBank)' that takes in a 
target string and an array of strings as arguments

The function should return a 2D array containing all differnets ways that 
the target can be constructed by concatenating elements of the word bank.
Each element of the 2D array should represent one combination that construct the target.

You may reuse elements of WordBank as many times as needed.

Examples:
allConstruct(abcdef, [ab, abc, cd, def, abcd, ef]) => [[ab,cd,ef], [abc,def], [abcd,ef]]
allConstruct(skateboard, [ska, t, cd, bor, ard]) => []

inputs:
m target length
n = array length

Brute Force:
Time: O(n^m)  
Space: O(m)  

Memoized:
Time: O()
Space: O()

*/

const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return [[]];
    const results = [];
    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const constructs = allConstruct(
                target.replace(word, ""),
                wordBank,
                memo
            );
            const ways = constructs.map((way) => [word, ...way]);
            results.push(...ways);
        }
    }
    return results;
};

console.log("Memoization");
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"]));
console.log(allConstruct("skateboard", ["ska", "t", "cd", "bor", "ard"]));
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
    allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeeee",
    ])
);

/*

inputs:
m target length
n = array length

Tabulation:
Time: O(m^2n^2)  
Space: O(mn)  

*/
const allConstructTab = (target, wordBank) => {
    const table = Array(target.length + 1)
        .fill()
        .map(() => []);
    table[0] = [[]];
    for (let i = 0; i <= target.length; i++) {
        if (table[i].length === 0) continue;
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                for (let combination of table[i]) {
                    table[i + word.length].push([...combination, word]);
                }
            }
        }
    }
    return table[target.length];
};

console.log("Tabulation");
console.log(
    allConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"])
);
console.log(allConstructTab("skateboard", ["ska", "t", "cd", "bor", "ard"]));
console.log(allConstructTab("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
    allConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeeef",
    ])
);
