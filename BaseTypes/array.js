/*
 * Playing with Arrays
 */

// create a new array
const array1 = [];
const array2 = Array(5);
console.log("this is an empty array", array1, array1.length);
console.log("this is an empty array", array2, array2.length);
console.log("fill an array", array2.fill());
console.log("fill an array", array2.fill(null));
console.log("fill an array", array2.fill(1));
let array3 = array2.map((value, index) => index * 10);
console.log(array3);

// add item
console.log("set value at index 0", (array1[0] = 10), array1);

// loop over an array
console.log("loop over an array using forEach");
array3.forEach((x) => console.log(x));

console.log("loop over an array using for of");
for (let x of array3) {
    console.log(x);
}

console.log("loop over indexes using for in");
for (let x in array3) {
    console.log(x);
}

//Find item
console.log("find item 30 in array", array3.indexOf(30));
console.log("find item 6 in array", array3.indexOf(6));

// Stack
const stack = [1, 2, 3, 4, 5];
console.log("Add item to stack", stack.push(6), stack);
console.log("Remove item from stack", stack.pop(), stack);

// Queue
const queue = [1, 2, 3, 4, 5];
console.log("Add item to queue", queue.unshift(6), queue);
console.log("remove item from queue", queue.shift(), queue);

// remove item from array using splice (splice changes the orginal array)
console.log(
    "Remove an item from position 3 of the array",
    array3.splice(3, 1),
    array3
);
console.log(
    "Remove all items from position 2 of the array",
    array3.splice(2),
    array3
);

array3 = array2.map((value, index) => index * 10);
console.log(
    "Remove an item from -3 of the array",
    array3.splice(-3, 1),
    array3
);
console.log(
    "Remove all items from position -2 of the array",
    array3.splice(-2),
    array3
);

array3 = array2.map((value, index) => index * 10);
console.log("copy an array using slice", array3.slice());
console.log("copy an array using deconstruct", [...array3]);

//Every
console.log(
    "Every value >= 0 ?",
    array3.every((x) => x >= 0)
);
console.log(
    "Every value >= 0 ?",
    array3.every((x) => x > 0)
);

//filter
console.log(
    "Every value >= 20 ?",
    array3.filter((x) => x >= 20)
);

//Join
console.log("Join all values into a string", array3.join(","));

//Reduce
console.log(
    "Reduce array to get sum",
    array3.reduce((previous, current) => previous + current)
);

//Get keys
const keys = array3.keys();
console.log("Get all keys");
for (let x of keys) {
    console.log(x);
}

//Get values
const values = array3.values();
console.log("Get all values");
for (let x of values) {
    console.log(x);
}

//Sort
console.log(
    "sort descending",
    array3.sort((x, y) => (x > y ? -1 : 1))
);

//Reverse
console.log("reverse array", array3.reverse());

//Some (return as soon as one true;)
console.log(
    "Some > 20",
    array3.some((x) => x > 20)
);
console.log(
    "Some > 60",
    array3.some((x) => x > 60)
);

//find index first item that match a testing fn
console.log(
    "FindIndex > 20",
    array3.findIndex((x) => x > 20)
);

//find first item > 20 in array
console.log(
    "Find 20",
    array3.find((x) => x > 20)
);
