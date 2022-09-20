
const bee = false;
let path = bee ? "/dev/stdin" : `${__dirname}/stdin`;

const input = require("fs").readFileSync(path, "utf8");

let lines = input.split("\n");
const calc = lines[1] * lines[2]

console.log(`NUMBER = ${lines[0]}`)
console.log(`SALARY = U$ ${calc.toFixed(2)}`);