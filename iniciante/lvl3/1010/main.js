
const bee = false;
let path = bee ? "/dev/stdin" : `${__dirname}/stdin`;

const input = require("fs").readFileSync(path, "utf8");

let lines = input.split("\n");

let quantidade = 0;
let total = 0;

for(let line of lines) {
   const lineSplit = line.split(' ')
   quantidade += lineSplit[1]
   total += lineSplit[1] * lineSplit[2]
}

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)