

function checkVowelOrConsonant(char) {
   
    if (char >= 'A' && char <= 'Z') {
        char = String.fromCharCode(char.charCodeAt(0) + 32);
    }

   
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        console.log("it is vowel")
    } 
  
    else if (char >= 'a' && char <= 'z') {
       console.log("it is consonant")
       
    } 
   
    else {
        console.log("not valid character")
        
    }
    return
}


console.log(checkVowelOrConsonant('A')); 

