var assert = require("chai").assert;

function isMatch(str, pattern) {
    // What if str or pattern is empty ?
    // What about casing ?

    // if pattern and str are identical then we have a match
    if (str === pattern) return true;

    // if pattern is a star it matches all string
    if (pattern === "*") return true;

    // example:
    // Hello World
    // i
    // Hello W*t
    // j

    const helper = (i, j, memo = {}) => {
        let key = `${i}|${j}`;

        if (key in memo) return memo[key];
        // Check if we are out of bounds
        else if (i > str.length || j > pattern.length) {
            memo[key] = false;
        }

        // Reached the end of both
        else if (i === str.length && j === pattern.length) {
            memo[key] = true;
        }

        // At a given index char are equals
        else if (str[i] === pattern[j]) {
            memo[key] = helper(i + 1, j + 1, memo);
        } else if (pattern[j] === "*") {
            //* matches 0 char
            let none = helper(i, j + 1, memo);
            //* matches many chars
            let many = helper(i + 1, j, memo);

            memo[key] = none || many;
        }

        return memo[key] || false;
    };

    return helper(0, 0);
}

assert.equal(isMatch("Hello World", "Hello World"), true, "Same");
assert.equal(isMatch("Hello World", "*"), true, "Pattern is a star");
assert.equal(isMatch("Hello World", "Hello W*"), true, "Matches");
assert.equal(isMatch("Hello World", "Hello W*t"), false, "No match pattern");
assert.equal(isMatch("Hello World", "Hellt W*"), false, "No match str");

console.log("done!");
