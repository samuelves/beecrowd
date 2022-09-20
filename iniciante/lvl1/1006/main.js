
const bee = false;
let path = bee ? "/dev/stdin" : `${__dirname}/stdin`;

const input = require("fs").readFileSync(path, "utf8");

let lines = input.split("\n");

let A = parseFloat(lines.shift())
let B = parseFloat(lines.shift())
let C = parseFloat(lines.shift())

const PESOS = 2 + 3 + 5


A = A * 2
B = B * 3
C = C * 5

const X = (A + B + C) / PESOS

console.log(`MEDIA = ${X.toFixed(1)}`)