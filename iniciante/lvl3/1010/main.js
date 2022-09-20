
const bee = false;
let path = bee ? "/dev/stdin" : `${__dirname}/stdin`;

const input = require("fs").readFileSync(path, "utf8");

let lines = input.split("\n");

let quantidade = 0;
let total = 0;


for(let i = 0; i < lines.length; i ++) {
   let lineSplit = lines[i].split(' ')
   quantidade += parseInt(lineSplit[1])
   total += parseInt(lineSplit[1]) * parseFloat(lineSplit[2])
}


console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)