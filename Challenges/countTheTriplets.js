/*

Given an array of distinct integers. 
The task is to count all the triplets such that sum of two elements equals the third element.
 
Your Task:  
You don't need to read input or print anything. 
Your task is to complete the function countTriplet() which takes the array arr[] and N as inputs and returns the triplet count

Expected Time Complexity: O(N2)
Expected Auxiliary Space: O(1)

Constraints:
1 ≤ N ≤ 103
1 ≤ arr[i] ≤ 105

Example 1:
Input:
N = 4
arr[] = {1, 5, 3, 2}
Output: 2
Explanation: There are 2 triplets: 
1 + 2 = 3 and 3 +2 = 5 

Example 2:
Input: 
N = 3
arr[] = {2, 3, 4}
Output: 0
Explanation: No such triplet exits


*/

const utils = require("../utils");

function countTripletOriginal(arr, n) {
    const sortedArray = arr.sort((a, b) => (a < b ? -1 : 1));
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = sortedArray[i] + sortedArray[j];
            let k = j + 1;
            while (k < n && sortedArray[k] <= sum) {
                if (sum === sortedArray[k]) {
                    result++;
                    break;
                }
                k++;
            }
        }
    }
    return result;
}

// This one is better...
/*
Example:
Input:
N = 4
arr[] = {1, 5, 3, 2}
Output: 2
Explanation: There are 2 triplets: 
1 + 2 = 3 and 3 +2 = 5 

Approach:
    - if array doesn't have 3 input return 0;
    - sort the array that way we'll be able to work our way through the array without having to come back.
    - [1, 2, 3, 5]
    - Keep 2 indexes as we move in the array (one for both number we sum).
    - Keep an index for the sum result.
    - At start index1: 0, index2: 1 and indexSum: 2
    - Keep a track of the number of triplets we found.
    - Go through the list of number as long as index1 still allow use to have an index2 and sum inbound.
    - compute a tempSum of (index1 + index2)
    - if tempSum === indexSum
        - increase triplet
        - move index2
        - move indexSum after index2 (+1)
    - else if tempSum < indexSum (We won't be able to get a match)
        - move index2 and indexSum to next higher number
    else if (tempSum > indexSum) (We can still achieve a sum, but maybe with next number)
        - indexSum++
    - if indexSum > n - 1 

    [1, 2, 3, 5]
    index1:   0 | 0 | 1 | 
    index2:   1 | 2 | 2 
    indexSum: 2 | 3 | 3
    triplets: 0 | 1 | 1
    tempSum : 3 | 4 | 5

*/
function countTriplet(arr, n) {
    if (n < 3) {
        return 0;
    }
    const array = arr.sort((a, b) => (a < b ? -1 : 1));

    let index1 = 0;
    let index2 = 1;
    let indexSum = 2;
    let triplets = 0;
    while (true) {
        let tempSum = array[index1] + array[index2];
        if (tempSum === array[indexSum]) {
            ++triplets;
            ++index2;
            indexSum = index2 + 1;
        } else if (tempSum < array[indexSum]) {
            ++index2;
            indexSum = index2 + 1;
        } else if (tempSum > array[indexSum]) {
            indexSum += 1;
        }
        if (indexSum > n - 1) {
            ++index2;
            indexSum = index2 + 1;
        }
        if (index2 > n - 2) {
            ++index1;
            index2 = index1 + 1;
            indexSum = index2 + 1;
        }
        if (index1 > n - 3) {
            break;
        }
    }
    return triplets;
}

/*
Input:
N = 4
arr[] = {1, 5, 3, 2}
Output: 2
Explanation: There are 2 triplets: 
1 + 2 = 3 and 3 +2 = 5 
*/
utils.expect("countTriplet", countTriplet([1, 5, 3, 2], 4), 2);

/*
Example 2:
Input: 
N = 3
arr[] = {2, 3, 4}
Output: 0
Explanation: No such triplet exits
*/
utils.expect("countTriplet", countTriplet([2, 3, 4], 3), 0);

utils.expect("countTriplet", countTriplet([12, 8, 2, 11, 5, 14, 10], 7), 3);
