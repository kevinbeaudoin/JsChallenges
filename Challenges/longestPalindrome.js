const utils = require("../utils");

/***************************************************
 *
 * Some description of the problem...
 *
 ***************************************************/

function longestPalindrome(str) {
    let n = str.length;
    let maxLength = 1; // String of 1 are palindrome...
    let start = 0;
    //console.log(str);
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let current = str.slice(i, j + 1);
            if (isPalindrome(current) && current.length > maxLength) {
                start = i;
                maxLength = current.length;
            }
        }
    }
    return str.slice(start, start + maxLength);
}

function isPalindrome(str) {
    //console.log(str)
    // To check if a given string is a palindrome
    // we compare first with last char until we reach the middle
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

utils.expect("", longestPalindrome("aaaabbaa"), "aabbaa");
utils.expect("", longestPalindrome("rtindhstenmds"), "r");
