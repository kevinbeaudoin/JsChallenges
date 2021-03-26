const utils = require("../utils");

/***************************************************
  
Given an array of integers. Find the Inversion Count in the array. 

Inversion Count: For an array, inversion count indicates how far (or close) 
the array is from being sorted. If array is already sorted then the inversion 
count is 0. If an array is sorted in the reverse order then the inversion count is the maximum. 
Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.

***************************************************/

// function countInversion2(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] > arr[j] && i < j) count++;
//         }
//     }
//     return count;
// }

let inversion = 0;
function countInversion(arr) {
    inversion = 0;
    console.log(mergeSort(arr));
    return inversion;
}

function mergeSort(arr) {
    // Empty or one element, we return the array as is
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array in half
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
            inversion++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

const input = [2, 4, 1, 3, 5];
const expected = 3;
utils.expect("", countInversion(input), expected);

utils.expect("", countInversion([2, 3, 4, 5, 6]), 0);
utils.expect("", countInversion([10, 10, 10]), 0);
