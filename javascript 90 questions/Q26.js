function endsWithChar(str, char) {
    let lastChar;
    for(let i=0;i<str.length;i++){
        lastChar=str[i]
    }
    if (lastChar === char) {
        return true;
    } else {
        return false;
    }
}
let result = endsWithChar("codinggita", "a");
console.log(result);