
const bee = false;
let path = bee ? "/dev/stdin" : `${__dirname}/stdin`;

const input = require("fs").readFileSync(path, "utf8");

let lines = input.split("\n");

let A = parseInt(lines.shift())
let B = parseInt(lines.shift())
let C = parseInt(lines.shift())
let D = parseInt(lines.shift())
DIFERENCA = (A * B - C * D)

console.log(`DIFERENCA = ${DIFERENCA}`)