/**
 * Playing with Sets
 */

const set1 = new Set();

set1.add(1); // Set [ 1 ]
set1.add(2); // Set [ 1, 2 ]
set1.add(2); // Set [ 1, 2 ]
set1.add("Hello World"); // Set [ 1, 2, "Hello World" ]
const obj = { a: 1, b: 2 };
set1.add(obj);
set1.add({ a: 1, b: 2 }); // Same object but different instances so OK
console.log(set1);

console.log(set1.has(1)); // true
console.log(set1.has(3)); // false, since 3 has not been added to the set
console.log(set1.has(2)); // true
console.log(set1.has("Hello World".toLowerCase())); // false
console.log(set1.has(obj)); // true
console.log(set1.has({ a: 1, b: 2 })); //false different reference
console.log(set1.size); // 5

console.log(set1.delete(2)); // removes 2 from the set
console.log(set1.has(2)); // false, 2 has been removed
console.log(set1.delete(3)); // 3 isn'T there so returns false

console.log(set1.size); // 4, since we just removed one value

console.log(set1);

//iteration
console.log("\niteration");
for (let x of set1) {
    console.log(x);
}

console.log("\niteration keys");
for (let x of set1.keys()) {
    console.log(x);
}

console.log("\niteration values");
for (let x of set1.values()) {
    console.log(x);
}

//Convert to an array
console.log("toArray:", Array.from(set1));

//Array to set
const set2 = new Set([1, 2, 2, 3, 4]);
console.log(set2);

//Intersection
const set3 = new Set([1, 2, 3, 4, 5, 6]);
const set4 = new Set([4, 5, 6, 7, 8, 9]);
console.log("Intersection:", new Set([...set3].filter((x) => set4.has(x))));
console.log("Difference:", new Set([...set3].filter((x) => !set4.has(x))));
