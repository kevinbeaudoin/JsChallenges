const utils = require("../utils");

/***************************************************
 *
 * Given a number as an input, print out every integer from 1 to that number.
 * However, when the integer is divisible by 2, print out “Fizz”;
 * when it’s divisible by 3, print out “Buzz”;
 * when it’s divisible by both 2 and 3, print out “FizzBuzz”.
 *
 ***************************************************/

const input = 10;
const expected = "1 Fizz Buzz Fizz 5 FizzBuzz 7 Fizz Buzz Fizz ";

function fizzBuzz(targetNumber) {
    let result = "";
    for (let i = 1; i <= targetNumber; i++) {
        const isDivisibleBy2 = i % 2 === 0;
        const isDivisibleBy3 = i % 3 === 0;
        if (isDivisibleBy2 && isDivisibleBy3) {
            result = result.concat("FizzBuzz", " ");
        } else if (isDivisibleBy2) {
            result = result.concat("Fizz", " ");
        } else if (isDivisibleBy3) {
            result = result.concat("Buzz", " ");
        } else {
            result = result.concat(i, " ");
        }
    }
    return result;
}

utils.expect("FizzBuzz", fizzBuzz(input), expected);
