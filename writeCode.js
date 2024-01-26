// 1. Sum to Zero
let listOfNumbers = [2, 5, -9, 7, 4, 8, 9]

function returnZero(array) {
    for(let i = 0; i < listOfNumbers.length; i++) {
        for (let j = 0; j < listOfNumbers.length; j++) {
            if (i !== j) {
                if (listOfNumbers[i] + listOfNumbers[j] === 0) {
                return true;
                }
            }
        }
    }
    return false;
}

console.log(returnZero());

// // Runtime: O(n^2)


// 2. Unique Characters
function uniqueCharacters(str) {
    let seen = {};
    for (const char of str) {
        if (seen[char] === true) {
            return false;
        }
        seen[char] = true;
        // console.log(seen);
    }
    return true;
    // console.log(seen);
}

const result = uniqueCharacters('abcdeabc');
console.log(result);

// //Runtime: O(n)


// 3. Pangram Sentence - contains all letters in alphabet

function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const everyLetter = sentence.toLowerCase();

    for (let char of alphabet) {

        if (everyLetter.indexOf(char) === -1) {
            return false;
        }
    
    }
    return true;

}

const firstSentence = 'The quick brown fox jumps over the lazy dog';
const newSentence = "the cow jumped over the moon";

console.log(isPangram(newSentence))
console.log(isPangram(firstSentence))

//Runtime: O(n)


// // 4. Longest Word

function longestWord(arrayOfWords) {
    let longest = "";
    let highestLength = 0;

    for (let i = 0; i < arrayOfWords.length; i++) {
        const longestSoFar = arrayOfWords[i];
      
        if (longestSoFar.length > highestLength) {
            longest = longestSoFar;
            highestLength = longestSoFar.length;

        } 
     }
     return highestLength;
}

const arrayOfWords = ['iamone', 'andanother', 'butiamthelongest', 'idontthinkyouarethelongest'];
const youAreLong = longestWord(arrayOfWords);

console.log("The longest word is:", youAreLong);

//Runtime: O(n)