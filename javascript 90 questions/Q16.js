
function areAllPositive(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            return false; 
        }
    }
    return true; 
}

let result = areAllPositive([3, 5, 9, 1, 7]);
console.log(result);

let result2 = areAllPositive( [3, -5, 9, 1, 7]);
console.log(result2); 
