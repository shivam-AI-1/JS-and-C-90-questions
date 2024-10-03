
function ispoweroffour(n){
    if(n<=0){
        return false;
    }
    while(n%4===0){
        n/=4;
    }
    return n===1
}
console.log(ispoweroffour(16));
console.log(ispoweroffour(5));