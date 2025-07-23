# JavaScript Operators and Concatenation

## What Was Done

- Practiced **arithmetic operators**: `+`, `-`, `*`, `/`, `**`, `%`.
- Learned **comparison operators**: `>`, `>=`, `<`, `<=`, `==`, `===`, `!=`, `!==`.
- Explored **type coercion** and **string concatenation** using the `+` operator.
- Created `concat-demo.js` to observe how JavaScript evaluates mixed expressions.

---

## Highlights

- Arithmetic:
  - `**` is exponentiation (e.g., `2 ** 3 === 8`)
  - `%` gives the remainder (modulo).
- Comparison:
  - `==` checks **value** only (loose equality).
  - `===` checks **value and type** (strict equality).
- Concatenation behavior:

```js
var a = "hello" + 10 + 20 + 30;
console.log(a); // "hello102030"

var b = 10 + 20 + 30 + "hello";
console.log(b); // "60hello"