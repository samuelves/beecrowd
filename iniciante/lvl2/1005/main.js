
const bee = false;
let path = bee ? "/dev/stdin" : `${__dirname}/stdin`;

const input = require("fs").readFileSync(path, "utf8");

let lines = input.split("\n");

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
const PESOS = 3.5 + 7.5


A = A * 3.5
B = B * 7.5
const X = (A + B) / PESOS

console.log(`MEDIA = ${X.toFixed(5)}`)