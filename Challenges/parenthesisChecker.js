const utils = require("../utils");

/***************************************************
 *
 * Some description of the problem...
 *
 ***************************************************/

const input = null;
const expected = false;

function ispar(x) {
    // go through the string one char at a time
    // When we open a bracket we push it to an array.
    // when we find a closing one, we pop latest value in the array if value is different we have an issue.

    let stack = [];

    for (let i = 0; i < x.length; i++) {
        if (["(", "{", "["].includes(x[i])) {
            stack.push(x[i]);
        } else if ([")", "}", "]"].includes(x[i])) {
            const char = stack.pop();
            if (!char) {
                return false;
            }
            if (char === "(" && x[i] !== ")") {
                return false;
            }
            if (char === "[" && x[i] !== "]") {
                return false;
            }
            if (char === "{" && x[i] !== "}") {
                return false;
            }
        }
    }
    return stack.length === 0;
}
utils.expect("description", someFunction(input), expected);
