const utils = require("../utils");

/***************************************************
 *
 * Some description of the problem...
 *
 ***************************************************/

function longestDistinct(str) {
    let longest = 0;
    let used = [];

    for (let i = 0; i < str.length; i++) {
        if (used.includes(str[i])) {
            if (used.length > longest) {
                longest = used.length;
            }
            let index = used.indexOf(str[i]);
            used = [...used.slice(index + 1), str[i]];
        } else {
            used.push(str[i]);
        }
    }

    return Math.max(longest, used.length);
}
utils.expect("", longestDistinct("aewergrththy"), 4);
utils.expect("", longestDistinct("abababcdefababcdab"), 6);
utils.expect("", longestDistinct("geeksforgeeks"), 7);
