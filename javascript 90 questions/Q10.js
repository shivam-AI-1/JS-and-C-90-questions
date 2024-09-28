

function countEvenOdd(arr) {
    let even = 0;
    let odd = 0; 

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { 
            even++; 
        } else { 
            odd++;
        }
    }
    return {
        even: even,
        odd: odd
    };
}
let numbers = [1, 2, 3, 4, 5];
let result = countEvenOdd(numbers);
console.log("Even:", result.even, ", Odd:", result.odd);
