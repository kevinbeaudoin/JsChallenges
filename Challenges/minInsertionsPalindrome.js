const utils = require("../utils");

/***************************************************
 *
 * Some description of the problem...
 *
 ***************************************************/

function formPalindrome(str, i = 0, j = str.length - 1, memo = {}) {
    let key = `${i}..${j}`;
    if (key in memo) return memo[key];
    if (i >= j) {
        return 0;
    }

    if (str[i] === str[j]) {
        memo[key] = formPalindrome(str, i + 1, j - 1, memo);
    } else {
        //I either add a char before i or after j
        let choice1 = 1 + formPalindrome(str, i + 1, j, memo);
        let choice2 = 1 + formPalindrome(str, i, j - 1, memo);
        memo[key] = Math.min(choice1, choice2);
    }
    return memo[key];
}
utils.expect("", formPalindrome("geeks"), 3);
utils.expect("", formPalindrome("abcd"), 3);
utils.expect("", formPalindrome("aba"), 0);
