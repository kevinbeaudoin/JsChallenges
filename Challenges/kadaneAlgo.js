/*

Given an array arr of N integers. Find the contiguous sub-array with maximum sum.


Example 1:
Input:
N = 5
arr[] = {1,2,3,-2,5}
Output:
9
Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.

Example 2:
Input:
N = 4
arr[] = {-1,-2,-3,-4}
Output:
-1
Explanation:
Max subarray sum is -1 
of element (-1)

*/

const utils = require("../utils");

function kadane(arr, n) {
    let localMax = 0;
    let globalMax = -99999;
    for (let i = 0; i < n; i++) {
        localMax = Math.max(arr[i], arr[i] + localMax);
        if (localMax > globalMax) {
            globalMax = localMax;
        }
    }
    return globalMax;
}

utils.expect("kadane", kadane([1, 2, 3, -2, 5], 5), 9);
utils.expect("kadane", kadane([-1, -2, -3, -4], 4), -1);

utils.expect(
    "kadane",
    kadane([74, -72, 94, -53, -59, -3, -66, 36, -13, 22, 73, 15, -52, 75], 14),
    156
);
