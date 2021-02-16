const utils = require("../utils");

/***************************************************
 *
 * Anagrams are words or phrases that contain the same number of characters.
 * Create a function that checks for this.
 *
 ***************************************************/

const input1 = "Funeral";
const input2 = "Real Fun";
const expected1 = true;

const input3 = "ABCD";
const input4 = "AB DE";
const expected2 = false;

function clean(text) {
    return text.toLowerCase().replace(/[\W_]+/g, "");
}

function aggreggate(text) {
    const lettersAggregate = {};
    const cleaned = clean(text);
    for (let i = 0; i < cleaned.length; i++) {
        let c = cleaned[i];
        lettersAggregate[c] = lettersAggregate[c] ? ++lettersAggregate[c] : 1;
    }
    return lettersAggregate;
}

function areAnagram(text1, text2) {
    const letterAggregate1 = aggreggate(text1);
    const letterAggregate2 = aggreggate(text2);
    if (letterAggregate1.keys().length !== letterAggregate2.keys().length) {
        return false;
    }
    for (let c1 in letterAggregate1) {
        if (letterAggregate1[c1] !== letterAggregate2[c1]) {
            return false;
        }
    }
    for (let c2 in letterAggregate2) {
        if (letterAggregate1[c2] !== letterAggregate2[c2]) {
            return false;
        }
    }
    return true;
}
utils.expect("areAnagram", areAnagram(input1, input2), expected1);
utils.expect("areAnagram", areAnagram(input3, input4), expected2);
