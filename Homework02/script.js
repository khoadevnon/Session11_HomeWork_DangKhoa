
let a = parseInt(prompt("Enter a: "));
let b = parseInt(prompt("Enter b: "));
let arr = [];
let min = a < b ? a : b;
let max = a > b ? a : b;
for (let i = min; i <= max; i++) {
  arr.push(i);
}
console.log(arr);
