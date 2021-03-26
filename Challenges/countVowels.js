const utils = require("../utils");

/***************************************************
 *
 * Given a string of words or phrases, count the number of vowels.
 *
 ***************************************************/

const vowels = "aeiou".split("");
const input = "This is a sample sentence";
const expected = 8;

// could have been made using a reduce...
function countVowels(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        count += vowels.includes(text[i].toLowerCase()) ? 1 : 0;
    }
    return count;
}
utils.expect("countVowels", countVowels(input), expected);
