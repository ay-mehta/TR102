let greeting = "Hello, World";
console.log(greeting);

let john1 = "Hello, How are you?";
let mary1 = 'I am fine, how are you?';

console.log("John:", john1);
console.log("Mary:", mary1);

let john2 = "I am 'fantastic'";
let mary2 = 'My, that sounds "wonderful"!';

console.log("John:", john2);
console.log("Mary:", mary2);

let john3 = `How did you end up 'here'? Last time I knew, "wildlife" photographers didn't roam in NYC.`;
let mary3 = `Oh, shut up! 'We' have to come here a "lot"!`;

console.log("John:", john3);
console.log("Mary:", mary3);

let text = "Hello";
let text_len = text.length;
console.log(text_len);

let text_at = text.at(4);
console.log(text_at);

let text_charAt = text.charAt(3);
console.log(text_charAt);

text = text + " Hi";
console.log(text);

let extract_slice = text.slice(1, 5);
console.log(extract_slice);

let extract_substring = text.substring(5, 1);
console.log(extract_substring);

let a = "      hello world";
let sliced_a = a.slice(-1);
console.log(sliced_a);

console.log(a.split(" "));
console.log(a.trimStart());

let b = "hello";
b = b.replace(b.charAt(0), b.charAt(0).toUpperCase());
console.log(b);