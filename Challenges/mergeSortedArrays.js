/*

Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. 
Merge them in sorted order without using any extra space. 
Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.
 

Expected Time Complexity:  O((n+m) log(n+m))
Expected Auxilliary Space: O(1)
 

Constraints:
1 <= n, m <= 5*104
0 <= arr1i, arr2i <= 107


*/

const utils = require("../utils");

function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
        if (i == arr1.length || arr1[i] > arr2[j]) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = result[i];
    }
    for (let j = 0; j < arr2.length; j++) {
        arr2[j] = result[j + arr1.length];
    }
    return result;
}

/*
Example 1:
Input: 
n = 4, arr1[] = [1 3 5 7] 
m = 5, arr2[] = [0 2 6 8 9]
Output: 
arr1[] = [0 1 2 3]
arr2[] = [5 6 7 8 9]
Explanation:
After merging the two 
non-decreasing arrays, we get, 
0 1 2 3 5 6 7 8 9.
*/
const expect1 = [0, 1, 2, 3, 5, 6, 7, 8, 9];
utils.expect(
    "description",
    mergeSortedArrays([1, 3, 5, 7], [0, 2, 6, 8, 9]),
    expect1
);

/*
Example 2:
Input: 
n = 2, arr1[] = [10, 12] 
m = 3, arr2[] = [5 18 20]
Output: 
arr1[] = [5 10]
arr2[] = [12 18 20]
Explanation:
After merging two sorted arrays 
we get 5 10 12 18 20.
*/
const expect2 = [5, 10, 12, 18, 20];
utils.expect("description", mergeSortedArrays([10, 12], [5, 18, 20]), expect2);
