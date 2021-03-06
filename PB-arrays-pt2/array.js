const findGreatest = (maArray, myNumber) => {
    if (maArray[0] > myNumber) {
        console.log(maArray[0]);
    } if (maArray[1] > myNumber) {
        console.log(maArray[1]);
    } if (maArray[2] > myNumber) {
        console.log(maArray[2]);
    }
};

findGreatest([3, 4, 5], 4)

// **2. For the longest word.**
// Create a function to find the longest word in a given string. 

const longestWord = (string) => {
    let myArray = string.split(' ');
    console.log(myArray);
    let myArrayLength = myArray.length;
    console.log(myArrayLength);
    let longestWord = myArray[0];
    console.log(myArray);
    for (let i = 0; i < myArrayLength; i++) {
        if (myArray[i].length <= longestWord.length) {
        } else {
            longestWord = myArray[i];
        }
    }
    return longestWord;
};

console.log(longestWord('this is a web development course'));

// i.e. longestWord("this is a web development course") ➞  "development"

// **3. Reverse.**
// Create a function to reverse a number. 
const reverseNumber = (myArray2) => {
    let myString = myArray2.toString();
    let myArray3 = myString.split('');
    let myReverse = myArray3.reverse();
    console.log(myReverse);
    let myString2 = myReverse.join('');
    console.log(myString2);





};
reverseNumber(34532);



// i.e. reverse(34532) ➞ 23543

// **4. AEIOU: Vowels.**
// Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, "a, e, i, o, u") in the string. 
const findVowels = (str) => {
    let vowelsCount = 0;
    let myArrayTostring = str.toString();
    console.log(myArrayTostring);
    for (let i = 0; i <= myArrayTostring.length - 1; i++) {
        if (myArrayTostring[i] === "a" || myArrayTostring[i] === "e" || myArrayTostring[i] === "i" || myArrayTostring[i] === "o" || myArrayTostring[i] === "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;

}



console.log(findVowels(["this is a string"]));

// **5. Missing Number.**
// Create a function that takes an array of all integers between 1 and 10 (excluding one) and returns the missing integer.


// Examples: 
// * missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// * missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// * missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7 

// **6. Cubed.**
// Create a function that takes in an array of numbers and returns the sum of its cubes. 
const sumOfCubes = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 3);

    } return sum;

}

console.log(sumOfCubes([1, 5, 9]));

// Examples: 
// * sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// * sumOfCubes([2]) ➞ 8
// * sumOfCubes([]) ➞ 0

// **7. Dictionary.**
// Create a function that takes an initial string and an array of words, and returns a filtered array of the words that start with the same letters as the initial string.
// const dictionary = (str, array) => {
//     let letters = (dic) => dic === str;
//     let contains = dictionary.filter(letters);
//     console.log(contains);
// }

// dictionary("bu", ["button", "breakfast", "border"]);



// const dictionary = (str, array) =>{
//     if (str != array){
//         let empty = [];
//         return empty;
//     } else if (){

//     }
// }


// Notes:
// * If none of the words match, return an empty array.
// * Keep the filtered array in the same relative order as the original array of words.

// Examples:
// * dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
// * dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
// * dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []

// **8. Even Number Generator.**
// Create a function that finds all even numbers from 1 to the given number.

const evenNums = (array) => {
    let empty = [];
    for (i = 1; i < array; i++) {
        if ((array[i] % 2) === 0) {
            console.log(array[i]);
        } else if ((array[i] % 2 === 0) {
            return empty;
     }
    }
}

 evenNums([8]);
// Examples:
// * evenNums(8) ➞ [2, 4, 6, 8]
// * evenNums(4) ➞ [2, 4]
// * evenNums(2) ➞ [2]
// **Notes:** 
// * If there are no even numbers, return an empty array. 
// * Do not include 0. 

// **Bonus: Alphabetical Order.**
// Create a function to sort a string into alphabetical order. **NB:** assume numbers, symbols and punctuation are not included in the string.

// i.e. alphaOrder("webdev") ➞ "bdeevw" 