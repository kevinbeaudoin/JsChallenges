const utils = require("../utils");

/***************************************************
 *
 * Given a magazine of words and a ransom note, determine if it’s possible to “cut out”
 * and create the ransom note from the magazine words.
 *
 ***************************************************/

const magazine = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

function ransomNote(note, text) {
    const wordBank = text.toLowerCase().split(" ");
    for (let word of note.toLowerCase().split(" ")) {
        const index = wordBank.indexOf(word);
        if (index < 0) return false;
        wordBank.splice(index, 1);
    }
    return true;
}

utils.expect("ransomNote", ransomNote("sit ad est sint", magazine), true);
utils.expect("ransomNote", ransomNote("sit ad est sint in in", magazine), true);
utils.expect("ransomNote", ransomNote("sit ad est love", magazine), false);
utils.expect(
    "ransomNote",
    ransomNote("sit ad est sint in in in in", magazine),
    false
);
