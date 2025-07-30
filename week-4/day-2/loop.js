let numbers = [1, 2, 3, 4, 5];

// for loop
for (let i = 0; i < numbers.length; i++) {
    console.log("for:", numbers[i]);
}

// forEach loop
numbers.forEach(function(num) {
    console.log("forEach:", num);
});