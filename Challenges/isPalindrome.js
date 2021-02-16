const utils = require("../utils");

/***************************************************
 *
 * Write a function that checks if a given string is a palindrome
 * isPalindrome("Cigar? Toss it in a can. It is so tragic"), true
 * isPalindrome("sit ad est love"), false);
 *
 * A palindrome is a string that once reversed is the same as the original one.
 *
 * Chars other than letter and number don't count.
 *
 ***************************************************/

const input1 = "Cigar? Toss it in a can. It is so tragic";
const expected1 = true;
const input2 = "sit ad est love";
const expected2 = false;

function clean(text) {
    return text.replace(/[\W_]+/g, "").toLowerCase();
}

function isPalindrome(text) {
    const cleaned = clean(text);
    for (let i = 0; i <= cleaned.length / 2; i++) {
        if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function isPalindrome2(text) {
    const cleaned = clean(text);
    return (
        cleaned.split("").reduce((previous, current) => current + previous) ===
        cleaned
    );
}

utils.expect("isPalindrome", isPalindrome(input1), expected1);
utils.expect("isPalindrome", isPalindrome(input2), expected2);
