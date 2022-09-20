
const bee = false;
let path = bee ? "/dev/stdin" : `${__dirname}/stdin`;

const input = require("fs").readFileSync(path, "utf8");

let lines = input.split("\n");

const TAX = 15
const NAME = lines.shift()
const SALARY = parseFloat(lines.shift())
const TOTALS_SALES = parseFloat(lines.shift())

const PERCENT_SALES = TAX/100 * TOTALS_SALES

console.log(`TOTAL = R$ ${(SALARY + PERCENT_SALES).toFixed(2)}`)