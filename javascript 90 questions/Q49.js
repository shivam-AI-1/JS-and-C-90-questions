
function swapElements(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];  
}

let arr = [1, 2, 3, 4];
let i = 1, j = 3;
swapElements(arr, i, j);
console.log(arr);