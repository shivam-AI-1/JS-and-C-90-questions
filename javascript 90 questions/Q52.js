
let arr = [1, 2, 3, 4];
let arr2 = [];
 arr2[0] = arr[0]; 
for (let i = 1; i < arr.length; i++) {
    arr2[i] = arr2[i - 1] + arr[i]; 
}
console.log(arr2);