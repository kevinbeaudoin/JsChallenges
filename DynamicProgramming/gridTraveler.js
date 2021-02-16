/*
Given a grid of x by y cell.
How many different way can we move from one cell to another if we can only move down or right.

Base cases:
- if grid only (1,1) is has only one cell and the there is only one way.
- Same if grid has only one column or one row (x, 1) of (1, x) there is only 1 way.
- if grid is (0, x) or (x,0) cells.  There is 0 way.

*/

// Time: O(n exp 2)
// Space: O(n)
const gridTraveler = (width, height) => {
    if (width === 1 || height === 1) {
        return 1;
    }
    return gridTraveler(width - 1, height) + gridTraveler(width, height - 1);
};

/*
console.log(gridTraveler(1, 1)); //1
console.log(gridTraveler(2, 3)); //3
console.log(gridTraveler(3, 2)); //3
console.log(gridTraveler(3, 3)); //6
console.log(gridTraveler(18, 18)); //2333606220
*/

// Let's optimize using memo.
// gridTraveler(1,2) === gridTraveler(2,1)  So we can flip the values and still get the same output...
//
// Time: O(n * m)
// Space: O(n + m)
const gridTravelerMemo = (width, height, memo = {}) => {
    const key = `${width}-${height}`;
    if (key in memo) {
        return memo[key];
    }
    const equivalentKey = `${height}-${width}`;
    if (equivalentKey in memo) {
        return memo[equivalentKey];
    }
    if (width === 1 || height === 1) {
        return 1;
    }
    memo[key] =
        gridTravelerMemo(width - 1, height, memo) +
        gridTravelerMemo(width, height - 1, memo);
    return memo[key];
};

console.log(gridTravelerMemo(1, 1)); //1
console.log(gridTravelerMemo(2, 3)); //3
console.log(gridTravelerMemo(3, 2)); //3
console.log(gridTravelerMemo(3, 3)); //6
console.log(gridTravelerMemo(18, 18)); //2333606220

/*

// Time: O(mn)
// Space: O(mn)
*/
const gridTravelerTab = (width, height) => {
    const table = Array(width + 1)
        .fill()
        .map(() => Array(height + 1).fill(0));

    table[1][1] = 1;
    for (let i = 0; i <= width; i++) {
        for (let j = 0; j <= height; j++) {
            const current = table[i][j];
            if (j + 1 <= height) table[i][j + 1] += current;
            if (i + 1 <= width) table[i + 1][j] += current;
        }
    }

    return table[width][height];
};

// console.log(gridTravelerTab(1, 1)); //1
// console.log(gridTravelerTab(2, 3)); //3
//console.log("tab", gridTravelerTab(3, 2)); //3
console.log("tab", gridTravelerTab(3, 3)); //6
// console.log(gridTravelerTab(18, 18)); //2333606220
