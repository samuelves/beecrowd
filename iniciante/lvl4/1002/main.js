
const bee = false;
let path = bee ? "/dev/stdin" : `${__dirname}/stdin`;

const input = require("fs").readFileSync(path, "utf8");


const pi = 3.14159

const calc = input * input * pi

console.log(`A=${calc.toFixed(4)}`)