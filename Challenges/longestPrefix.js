const utils = require("../utils");

/***************************************************
 *
 * Given a array of N strings, find the longest common prefix among all strings present in the array.
 *
 ***************************************************/

function longestCommonPrefix(arr, n) {
    // We iterate each string within the array
    // Check if chars all match at a given index.
    // Since we are talking about a prefix we start from 0 and move on until we find a non matching char
    // We output the common prefix or we return -1
    // Prefix can't be longer than smallest string so we can use that one as a basis for the search.
    let smallestWord = "";
    for (let word of arr) {
        console.log(word);
        if (smallestWord.length === 0 || word.length < smallestWord.length) {
            smallestWord = word;
        }
    }
    console.log(smallestWord);
    for (let i = 0; i < smallestWord.length; i++) {
        for (let word of arr) {
            if (word[i] !== smallestWord[i]) {
                let prefix = smallestWord.slice(0, i);
                return prefix || -1;
            }
        }
    }

    return smallestWord;
}

console.log(longestCommonPrefix(["geeksforgeeks", "geeks", "geek", "geezer"]));
