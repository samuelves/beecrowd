
const bee = false;
let path = bee ? "/dev/stdin" : `${__dirname}/stdin`;

const input = require("fs").readFileSync(path, "utf8");

let lines = input.split("\n");

const A = parseInt(lines.shift())
const B = parseInt(lines.shift())

const X = A + B

console.log(`SOMA = ${X}`)