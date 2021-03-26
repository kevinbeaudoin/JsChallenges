/*


Given an array of size N-1 such that it can only contain distinct integers in the range of 1 to N. Find the missing element.

Your Task :
Complete the function MissingNumber() that takes array and N as input and returns the value of the missing number.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).

Constraints:
1 ≤ N ≤ 106
1 ≤ A[i] ≤ 106


Example 1:
Input:
N = 5
A[] = {1,2,3,5}
Output: 4

Example 2:
Input:
N = 10
A[] = {1,2,3,4,5,6,7,8,10}
Output: 9

*/

const utils = require("../utils");

/***************************************************
 *
 * Some description of the problem...
 *
 ***************************************************/

function missingNumberArray(arr, n) {
    let sumArray = 0;
    let theoricSum = 0;
    for (let i = 0; i < n - 1; i++) {
        theoricSum = theoricSum + i + 1;
        sumArray += arr[i];
    }
    theoricSum = theoricSum + n;
    return theoricSum - sumArray;
}
utils.expect("missingNumberArray", missingNumberArray([1, 2, 3, 5], 5), 4);
utils.expect(
    "missingNumberArray",
    missingNumberArray([1, 2, 3, 4, 5, 6, 7, 8, 10], 10),
    9
);
