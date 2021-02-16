const utils = require("../utils");

/***************************************************
 *
 * Given a string of characters, return the character that appears the most often.
 *
 ***************************************************/

const input = "This is a sentence where we can see a lot of e...";
const expected = "e";

function mostSeenChar(text) {
    const count = {};
    for (let c of text.toLowerCase().split("")) {
        count[c] = count[c] ? ++count[c] : 1;
    }
    const mostSeen = ["", 0];
    for (let c in count) {
        if (count[c] > mostSeen[1] && c !== " ") {
            mostSeen[0] = c;
            mostSeen[1] = count[c];
        }
    }
    return mostSeen[0];
}
utils.expect("Most Seen Char", mostSeenChar(input), expected);
