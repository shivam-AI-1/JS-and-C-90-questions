

function character(str,char){
    count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===char){
            count ++;
        }
    }
    return count
}
console.log(character("Hello World","l"));