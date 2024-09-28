
function calculateAverage(arr) {
    let sum = 0; 
    let count = 0; 
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
        count++; 
    }
    let average = sum / count; 
    return average; 
}
const numbers = [1,2,3,4];
const avg = calculateAverage(numbers);
console.log("Average:", avg); 
