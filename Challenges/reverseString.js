const utils = require("../utils");

// ***************************************************
//1. Given a string, reverse it
// reverse("Hello World!"); should print !dlroW olleH
const sentence = "Hello World!";
const expected = "!dlroW olleH";

function reverseArray(sentence) {
    return sentence.split("").reverse().join("");
}
utils.expect("reverseString", reverseArray(sentence), expected);

function reverseReduce(sentence) {
    return sentence.split("").reduce((previous, current) => current + previous);
}
utils.expect("reverseReduce", reverseReduce(sentence), expected);
