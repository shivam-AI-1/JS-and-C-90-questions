
let integer=123456;
let numstr=integer.toString();
let length=numstr.length;
let even=0;
let odd=0;
for(i=0;i<length;i++){
    let digit=parseInt(numstr[i]);
    
    if(numstr[i]%2==0){
        even=even+digit;
    }
    else{
        odd=odd+digit;
    }
}
console.log(even);
console.log(odd);