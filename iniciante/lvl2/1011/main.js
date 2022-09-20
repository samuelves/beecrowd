
const bee = false;
let path = bee ? "/dev/stdin" : `${__dirname}/stdin`;

const input = require("fs").readFileSync(path, "utf8");

const total = (4/3) * 3.14159 * Math.pow(input, 3)
console.log(`VOLUME = ${total.toFixed(3)}`)