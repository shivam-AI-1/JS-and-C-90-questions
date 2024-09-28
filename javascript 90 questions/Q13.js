

 let arr = [1, 2, 3, 4, 5]
 function containsNumber(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true; 
        }
    }
    return false; 
}
result = containsNumber([1, 2, 3, 4, 5],3)
console.log(result)
