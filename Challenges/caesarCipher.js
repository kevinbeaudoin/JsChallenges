const utils = require("../utils");

/***************************************************
 *
 * Given a phrase, substitute each character by shifting it up or down
 * the alphabet by a given integer. If necessary, the shifting should wrap
 * around back to the beginning or end of the alphabet.
 *
 * Any characters not in the alphabet are preserved as is.
 *
 ***************************************************/

const phraseToCipher = "I love JavaScript!";
const cipherShift = 100;
const expected = "E hkra FwrwOynelp!";
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function cipher(phrase, shift) {
    const lowerCasePhrase = phrase.toLowerCase();
    const adjustedShift = shift % alphabet.length;
    let ciphered = "";
    for (let i = 0; i < phrase.length; i++) {
        let originalIndex = alphabet.indexOf(lowerCasePhrase[i]);
        if (originalIndex < 0) {
            ciphered += phrase[i];
        } else {
            const adjustedIndex =
                originalIndex + adjustedShift >= alphabet.length
                    ? originalIndex + adjustedShift - alphabet.length
                    : originalIndex + adjustedShift;
            const newChar = alphabet[adjustedIndex];
            ciphered +=
                lowerCasePhrase[i] !== phrase[i]
                    ? newChar.toUpperCase()
                    : newChar;
        }
    }
    return ciphered;
}
utils.expect("cipher", cipher(phraseToCipher, cipherShift), expected);
