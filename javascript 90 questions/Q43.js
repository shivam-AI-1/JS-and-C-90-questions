

function maxConsecutiveOnes(binaryArray) {
    let maxCount = 0;      
    let currentCount = 0;   
    
    for (let i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] === 1) {
            currentCount++;  
        } else {
            
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
            currentCount = 0; 
        }
    }
    if (currentCount > maxCount) {
        maxCount = currentCount;
    }
    return maxCount;
}
console.log(maxConsecutiveOnes( [1, 1, 0, 1, 1, 1]));
