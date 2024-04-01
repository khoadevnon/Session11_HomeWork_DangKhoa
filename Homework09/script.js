let numbers = [1, 2, 3, 4, 5];

let newArr = numbers;
newArr.push(8);

console.log(newArr);
console.log(numbers);
// newArr và numbers đều trỏ về cùng một vùng nhớ nên khi thay đổi giá trị của newArr thì giá trị của numbers cũng thay đổi theo.
// Để tạo mảng mới không liên quan đến mảng cũ, ta sử dụng phương thức slice() như sau:
// let numbers1 = [1, 2, 3, 4, 5];
// let newArr1 = numbers1.slice();
// newArr1.push(8);
// console.log(newArr1);
// console.log(numbers1);
// Kết quả:
// [ 1, 2, 3, 4, 5, 8 ]
// [ 1, 2, 3, 4, 5 ]
// Mảng numbers1 không bị thay đổi giá trị khi thay đổi giá trị của newArr1.
// Cách khác để tạo mảng mới không liên quan đến mảng cũ, ta sử dụng phương thức concat() như sau:
