/**
 * Playing with Strings
 */

const part1 = "This is a";
const part2 = "sentence in JavaScript";
const sentence = `${part1} ${part2}`;

// Get a char at a given index.
let index = 6;

// Getting char at a given index
console.log(`Char at index ${index} using indexer: ${sentence[index]}`);
console.log(`Char at index ${index} using charAt: ${sentence.charAt(index)}`);
console.log(
    `UTF-16 at index ${index} using charCodeAt: ${sentence.charCodeAt(index)}`
);

// Merging string together.

console.log(
    `merging "${part1}" with "${part2}" using concat:`,
    part1.concat(" ", part2)
);
console.log(
    `merging "${part1}" with "${part2}" using + operator:`,
    part1 + " " + part2
);
console.log(
    `merging "${part1}" with "${part2}" using array join:`,
    [part1, part2].join(" ")
);

//Check if string contains a given value
console.log(
    `check if "${sentence}" startsWith "This is"`,
    sentence.startsWith("This is")
);
console.log(
    `check if "${sentence}" startsWith "This isn't"`,
    sentence.startsWith("This isn't")
);
console.log(
    `check if "${sentence}" endsWith "JavaScript"`,
    sentence.endsWith("JavaScript")
);
console.log(
    `check if "${sentence}" endsWith "not JavaScript"`,
    sentence.endsWith("not JavaScript")
);
console.log(`check first index of "i" in "${sentence}"`, sentence.indexOf("i"));
console.log(
    `check last index of "not" in "${sentence}"`,
    sentence.indexOf("not")
);
console.log(
    `check last index of "i" in "${sentence}"`,
    sentence.lastIndexOf("i")
);
console.log(`check if "${sentence}" includes "i"`, sentence.includes("i"));

//Pad string
console.log(
    `Pad Start "${sentence}" with 5 "."`,
    sentence.padStart(sentence.length + 5, ".")
);
console.log(
    `Pad End "${sentence}" with 5 "."`,
    sentence.padEnd(sentence.length + 5, ".")
);

console.log(`Batman using repeat`, "Na".repeat(8) + " Batman!");

//Cut a part of a string
console.log(`Slice "${sentence}" from 10 to 19:`, sentence.slice(10, 19));
console.log(`Slice "${sentence}" from 10:`, sentence.slice(10));
console.log(`Slice "${sentence}" from 10 to last 6:`, sentence.slice(10, -6));
console.log(`Slice "${sentence}" last 10:`, sentence.slice(-10));
console.log(`Split all word of a "${sentence}":`, sentence.split(" "));
console.log(`Split all char of a "${sentence}":`, sentence.split(""));

//Replace
console.log(`Replace "i" by "I" in "${sentence}":`, sentence.replace("i", "I"));
console.log(
    `Replace all "i" by "I" in "${sentence}":`,
    sentence.replace(/i/g, "I")
);

//Casing
console.log(`"${sentence}" to upper case:`, sentence.toUpperCase());
console.log(`"${sentence}" to lower case:`, sentence.toLowerCase());

//Casing
const toTrim = "     JavaScript   ";
console.log(`Trim "${toTrim}":`, toTrim.trim());
console.log(`Trim start "${toTrim}":`, toTrim.trimStart());
console.log(`Trim end "${toTrim}":`, toTrim.trimEnd());
