let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = [];
let newArr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    newArr.push(arr[i]);
  } else {
    newArr1.push(arr[i]);
  }
}
console.log(newArr);
console.log(newArr1);
