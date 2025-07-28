let text = "Hello";
let arr = text.split("");
console.log(arr); // ['H', 'e', 'l', 'l', 'o']

let age = 16;
if (age < 18) {
    console.log("Cannot vote");
} else {
    console.log("Can vote");
}

arr = [1, 2, 3, 6, 4];
arr.sort();
console.log(arr); // Sorted array (lexicographically)

let string_text = arr.toString();
console.log(string_text); // "1,2,3,4,6"

let str = "Hello+World7ii";
console.log(str.split("+")); // ['Hello', 'World7ii']

let sliced = arr.slice(1, 4);
console.log(sliced); // [2, 3, 4]

let spliced = arr.splice(2, 2); // remove 2 elements starting at index 2
console.log(spliced); // [3, 4]
console.log(arr); // Remaining array after splice: [1, 2, 6]

let original = "Hello";
let reversed = original.split("").reverse().join("");
console.log(reversed); // "olleH"