

function countPositiveNegative(arr) {
    let positive = 0; 
    let negative = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++; 
        } else if (arr[i] < 0) {
            negative++; 
        }
    }

    
    console.log("Positive:", positive, "Negative:", negative);
}
countPositiveNegative( [1, -2, 3, -4, 5, -6]); 
