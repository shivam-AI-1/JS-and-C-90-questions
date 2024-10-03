
function findLongestWord(sentence) {
    let longestWord = ''; 
    let currentWord = ''; 
    for (let i = 0; i <= sentence.length; i++) {
        if (i === sentence.length || sentence[i] === ' ') {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord; 
            }
            currentWord = ''; 
        } else {
            currentWord += sentence[i];
        }
    }
    return longestWord; 
}
const inputSentence = "I love programming in JavaScript";
const result = findLongestWord(inputSentence);
console.log("The longest word is:", result);
