const utils = require("../utils");

/***************************************************

Given two arrays X and Y of positive integers, 
find the number of pairs such that xy > yx (raised to power of) 
where x is an element from X and y is an element from Y.

Expected Time Complexity: O((N + M)log(N)).
Expected Auxiliary Space: O(1).

Constraints:
1 ≤ M, N ≤ 105
1 ≤ X[i], Y[i] ≤ 103

***************************************************/

function numberOfPairs(X, Y) {
    let nbPairs = 0;
    for (let i = 0; i < X.length; i++) {
        for (let j = 0; j < Y.length; j++) {
            let xy = Math.pow(X[i], Y[j]);
            let yx = Math.pow(Y[j], X[i]);
            //xy > yx
            if (xy > yx) {
                nbPairs++;
            }
        }
    }
    return nbPairs;
}

/*
Example 1:
Input: 
M = 3, X[] = [2 1 6] 
N = 2, Y[] = [1 5]
Output: 3
Explanation: 
The pairs which follow xy > yx are as such: 
21 > 12,  25 > 52 and 61 > 16 .

// Start with all entry from X
// Match with all entry from Y  (we basically do the matrix)
// Count each occurences where xy > yx

*/
let x = [2, 1, 6];
let y = [1, 5];
let expected = 3;
utils.expect("", numberOfPairs(x, y), expected);

/*
Example 2:
Input: 
M = 4, X[] = [2 3 4 5]
N = 3, Y[] = [1 2 3]
Output: 5
Explanation: 
The pairs for the given input are 
21 > 12 , 31 > 13 , 32 > 23 , 41 > 14 , 
51 > 15 .
*/
x = [2, 3, 4, 5];
y = [1, 2, 3];
expected = 5;
utils.expect("", numberOfPairs(x, y), expected);
