

function defangIP(address){
    let result=""
    for (let i=0;i<address.length;i++){
        if(address[i]==='.'){
            result+="[.]"
        }else{
            result+=address[i];
        }
    }
    return result;
}
console.log(defangIP( "1.1.1.1"));
console.log(defangIP("255.100.50.0"));


