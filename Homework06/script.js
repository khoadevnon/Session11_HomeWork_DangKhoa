

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function shuffleArray(arr) {
    let newArr = [];
    while (arr.length > 0) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        newArr.push(arr[randomIndex]);
        arr.splice(randomIndex, 1);
    }
    return newArr;
}

console.log(shuffleArray(arr));