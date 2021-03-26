const utils = require("../utils");

/***************************************************

Given a sorted array of positive integers. 
Your task is to rearrange  the array elements alternatively i.e first element should be max value, 
second should be min value, third should be second max, fourth should be second min and so on.


Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).

Constraints:
1 <= N <= 107
1 <= arr[i] <= 107
***************************************************/

// This one is slower but uses no extra space...
function rearrangeArrayAlternately(arr) {
    for (let i = 0; i < arr.length; i = i + 2) {
        let max = arr.pop();
        let min = arr.splice(i, 1);
        if (min.length > 0) {
            arr.splice(i, 0, max, min[0]);
        } else {
            arr.push(max);
        }
    }
    return arr;
}

// This one is faster but uses O(n) space and we iterate twice the array O(2n)
function rearrangeArrayAlternately2(arr) {
    const result = [];
    for (let i = 0; i < arr.length / 2; i++) {
        result.push(arr[arr.length - 1 - i]);
        result.push(arr[i]);
    }
    for (let i = 0; i < n; i++) {
        arr[i] = result[i];
    }
    return arr;
}

// This one uses O(1) space and O(2n) time.
// We store 2 values at each index and
function rearrange(arr, n) {
    let l = 0;
    let r = n - 1;
    let m = 1000000;
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            arr[i] += (arr[r] % m) * m;
            r -= 1;
        } else {
            arr[i] += (arr[l] % m) * m;
            l += 1;
        }
    }
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(arr[i] / m);
    }
}

/*
Example 1:
Input:
N = 6
arr[] = {1,2,3,4,5,6}
Output: 6 1 5 2 4 3
Explanation: Max element = 6, min = 1, 
second max = 5, second min = 2, and 
so on... Modified array is : 6 1 5 2 4 3.
*/

const input1 = [1, 2, 3, 4, 5, 6];
const expected1 = [6, 1, 5, 2, 4, 3];
utils.expect("", rearrangeArrayAlternately2(input1), expected1);

/*
Example 2:
Input:
N = 11
arr[]={10,20,30,40,50,60,70,80,90,100,110}
Output:110 10 100 20 90 30 80 40 70 50 60
Explanation: Max element = 110, min = 10, 
second max = 100, second min = 20, and 
so on... Modified array is : 
110 10 100 20 90 30 80 40 70 50 60.
*/
const input2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
const expected2 = [110, 10, 100, 20, 90, 30, 80, 40, 70, 50, 60];
utils.expect("", rearrangeArrayAlternately2(input2), expected2);
