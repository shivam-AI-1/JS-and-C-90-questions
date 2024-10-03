
function first_element(arr){

    for(let i=0;i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                return arr[i];
            }
        }
        arr.push(arr[i])
    }
    return -1;
}
console.log(first_element([10, 5, 3, 4, 3, 5, 6]));













































