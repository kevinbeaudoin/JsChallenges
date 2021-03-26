const utils = require("../utils");
/*

Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.
 
Your Task:
You don't need to read input or print anything. 
The task is to complete the function subarraySum() which takes arr, 
N and S as input parameters and returns a list containing the starting 
and ending positions of the first such occurring subarray from the left 
where sum equals to S. 
The two indexes in the list should be according to 1-based indexing. If no such subarray is found, return -1. 

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

Constraints:
1 <= N <= 105
1 <= Ai <= 1010

Example 1:
Input:
N = 5, S = 12
A[] = {1,2,3,7,5}
Output: 2 4
Explanation: The sum of elements 
from 2nd position to 4th position 
is 12.

Example 2:
Input:
N = 10, S = 15
A[] = {1,2,3,4,5,6,7,8,9,10}
Output: 1 5
Explanation: The sum of elements 
from 1st position to 5th position
is 15.
 */

/**
 * @param {number[]} arr
 * @param {number} n
 * @param {number} s
 * @returns {number[]}
 */

const N = 5;
const S = 12;
const A = [1, 2, 3, 7, 5];

function subarraySum(arr, n, s) {
    let sum = arr[0];
    let startingIndex = 0;

    if (sum === s) {
        return [1, 1];
    }

    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
        while (sum > s) {
            sum = sum - arr[startingIndex];
            startingIndex += 1;
        }
        if (sum === s) {
            return [startingIndex + 1, i + 1];
        }
    }
    while (sum > s && startingIndex < n - 1) {
        sum = sum - arr[startingIndex];
        startingIndex += 1;
        if (sum === s) {
            return [startingIndex + 1, n];
        }
    }

    return -1;
}
utils.expect("subarraySum", subarraySum(A, N, S), [2, 4]);
utils.expect("subarraySum", subarraySum([1, 2, 3, 7, 5], 5, 15), [3, 5]);
utils.expect(
    "subarraySum",
    subarraySum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, 15),
    [1, 5]
);

utils.expect(
    "subarraySum",
    subarraySum(
        [
            135,
            101,
            170,
            125,
            79,
            159,
            163,
            65,
            106,
            146,
            82,
            28,
            162,
            92,
            196,
            143,
            28,
            37,
            192,
            5,
            103,
            154,
            93,
            183,
            22,
            117,
            119,
            96,
            48,
            127,
            172,
            139,
            70,
            113,
            68,
            100,
            36,
            95,
            104,
            12,
            123,
            134,
        ],
        42,
        468
    ),
    [38, 42]
);

utils.expect(
    "subarraySum",
    subarraySum(
        [
            142,
            112,
            54,
            69,
            148,
            45,
            63,
            158,
            38,
            60,
            124,
            142,
            130,
            179,
            117,
            36,
            191,
            43,
            89,
            107,
            41,
            143,
            65,
            49,
            47,
            6,
            91,
            130,
            171,
            151,
            7,
            102,
            194,
            149,
            30,
            24,
            85,
            155,
            157,
            41,
            167,
            177,
            132,
            109,
            145,
            40,
            27,
            124,
            138,
            139,
            119,
            83,
            130,
            142,
            34,
            116,
            40,
            59,
            105,
            131,
            178,
            107,
            74,
            187,
            22,
            146,
            125,
            73,
            71,
            30,
            178,
            174,
            98,
            113,
        ],
        74,
        665
    ),
    -1
);

const arr2 = [
    28,
    68,
    142,
    130,
    41,
    14,
    175,
    2,
    78,
    16,
    84,
    14,
    193,
    25,
    2,
    193,
    160,
    71,
    29,
    28,
    85,
    76,
    187,
    99,
    171,
    88,
    48,
    5,
    104,
    22,
    64,
    107,
    164,
    11,
    172,
    90,
    41,
    165,
    143,
    20,
    114,
    192,
    105,
    19,
    33,
    151,
    6,
    176,
    140,
    104,
    23,
    99,
    48,
    185,
    49,
    172,
    65,
];
utils.expect("subarraySum", subarraySum(arr2, 57, 1562), [20, 37]);
