const utils = require("../utils");

/***************************************************
 *
 * Given an array and a size, split the array items into a list of arrays of the given size.
 *
 ***************************************************/

const input = [1, 2, 3, 4, 5, 6];
const expected = 21;

function chunk(array, size) {
    if (array.length === 0) {
        return [];
    }
    if (array.length <= size) {
        return [[...array]];
    }
    const subArrays = [];
    let chunkStart = 0;
    while (chunkStart < array.length) {
        subArrays.push(array.slice(chunkStart, chunkStart + size));
        chunkStart += size;
    }
    return subArrays;
}
utils.expect("chunk", chunk([1, 2, 3, 4], 2), [
    [1, 2],
    [3, 4],
]);
utils.expect("chunk", chunk([1, 2, 3, 4], 3), [[1, 2, 3], [4]]);
utils.expect("chunk", chunk([1, 2, 3, 4], 5), [[1, 2, 3, 4]]);
