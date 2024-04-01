

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];
let count = 0;
let max = 0;
let maxArr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }
  if (count === 1) {
    newArr.push(arr[i]);
  }
  count = 0;
}
console.log(newArr);
for (let i = 0; i < newArr.length; i++) {
  if (newArr[i] === newArr[i + 1]) {
    count++;
  }
  if (count > max) {
    max = count;
    maxArr = newArr.slice(i - count, i);
  }
}
console.log(maxArr);


