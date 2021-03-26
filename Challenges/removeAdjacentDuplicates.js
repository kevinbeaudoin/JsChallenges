const utils = require("../utils");

/***************************************************
 *
 * Some description of the problem...
 *
 ***************************************************/

function removeAdjacentDuplicates(str) {
    //.           *
    // geeksforgeek
    // is the char at a given index the same as the folowing one?
    // if so, we remove them

    // cleaned: gksforg
    // i:       10
    // current: e
    // next:    e

    let cleaned = "";
    let i = 0;
    while (i < str.length) {
        let current = str[i];
        let next = str[i + 1];
        if (current !== next) {
            cleaned += current;
        } else {
            // we need to find all occurence of this char...
            while (current === str[i + 1]) {
                i++;
            }
        }
        i++;
    }

    return cleaned;
}
utils.expect("", removeAdjacentDuplicates("mississipie"), "mpie");
