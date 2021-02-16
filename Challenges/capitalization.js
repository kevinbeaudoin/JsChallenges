const utils = require("../utils");

/***************************************************
 *
 * Given a phrase, capitalize every word.
 *
 ***************************************************/

const input = "I love javaScript!";
const expected = "I Love JavaScript!";

function capitalization(input) {
    const words = input.split(" ");
    let sentence = "";
    for (let word of words) {
        sentence += word[0].toUpperCase() + word.slice(1);
        if (sentence.length < input.length) {
            sentence += " ";
        }
    }
    return sentence;
}

function capitalization2(phrase) {
    return phrase
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}

utils.expect("capitalization", capitalization(input), expected);
utils.expect("capitalization", capitalization2(input), expected);
