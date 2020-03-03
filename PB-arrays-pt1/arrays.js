<<<<<<< HEAD
const euroCities = ['Paris', 'London', 'Valleta', 'Prague', 'Rome'];

let second = euroCities[1];
console.log(second);

//2. Change the first item in the array to "Berlin".

euroCities[0] = 'Berlin';
console.log(euroCities);

//3. Print the length of the array "euroCities".
console.log(euroCities.length);

//4. Remove the last item of the array "euroCities". 
euroCities.pop(euroCities.length-1);
console.log(euroCities);

//5. Use an array method to add "Budapest" to the euroCities array. 
euroCities.push('Budapest');
console.log(euroCities);

// 6. **Bonus**: Remove the second and third items from the euroCities array. 
euroCities[1] = undefined;//not enough 
=======
// 1. Declare a variable named 'euroCities' and assign an array to the variable e.g. ['Paris', 'London', 'Valletta', 'Prague', 'Rome']. Declare another variable and assign the second item of the array as a value.
const euroCities = ['Paris', 'London', 'Valletta', 'Prague', 'Rome'];
console.log(euroCities);
const second = euroCities[1];
console.log(second); // London
// 2. Change the first item in the array to 'Berlin'.
euroCities[0] = 'Berlin';
console.log(euroCities);
// 3. Print the length of the array 'euroCities'
console.log(euroCities.length); // 5
// 4. Remove the last item of the array 'euroCities'
// POP
euroCities.pop();
console.log(euroCities);
// 5. Use an array method add 'Budapest'
euroCities.push('Budapest');
console.log(euroCities);
// 6. Bonus:
euroCities[1] = undefined; // not enough???
>>>>>>> d8cca8d3c2eff81754d50e7fbd52094fcaeb6a3c
console.log(euroCities);
euroCities.splice(1,2); //delete starts at 1, delete 2 items
console.log(euroCities);
<<<<<<< HEAD

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ['Manila', 'Bangkok', 'Kuala Lumpur', 'Tokyo'];

// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  

let newCities = asianCities.spli(2,3);
console.log(newCities);
=======
// 7. asianCitites
const asianCities = ['Manila', 'Bangkok', 'Beijing', 'Kuala Lumpur', 'Tokyo'];
// 8. Use an array method to select items 2-4 from the array of asianCities and store this in another variable

const newCities = asianCities.splice(2, 4); // cuts out 3 from the original
console.log(newCities);
// only 2 cities left
console.log(asianCities.length); // 2

// 9. concat() putting arrays together in one array
const worldCities = euroCities.concat(asianCities);
console.log(worldCities); // length of 5

// 10. Reverse the order ??? reverse()
worldCities.reverse();
console.log(worldCities);

// 11. Replace 3rd item with toronto
worldCities[2] = 'Toronto';
console.log(worldCities);

// 12. Washington should be added at 2nd, nothing is removed!
worldCities.splice(1, 0, 'Washington');
console.log(worldCities);

// 13. write a program to put an array into a string
console.log(worldCities.toString()); // puts everything together with a comma
console.log(worldCities.join(', ')); // puts all arrays together into one string with a seperator
console.log(worldCities.join('+'));

// 14. program to reverse the string hello world
const myString = 'hello world';
const myArray = myString.split('');
console.log(myArray.length);
myArray.reverse();
console.log(myArray);
console.log(myArray.join('')); // Without seperator
// shorter!!!
console.log(myString.split('').reverse().join(''));

// Sibling names = Katharina and Isabella
// 15.
const mySiblings = ['Katharina', 'Isabella'];
const parentsNames = ['Josef', 'Claudia'];
const allNames = mySiblings.concat(parentsNames); // add both together
console.log(allNames);
>>>>>>> d8cca8d3c2eff81754d50e7fbd52094fcaeb6a3c


// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  

const allCities = euroCities.concat(asianCities);
console.log(allCities);

// 10. Reverse the order of worldCities.

allCities.reverse();
console.log(allCities);

<<<<<<< HEAD
// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 
allCities[2] = 'Toronro';
console.log(allCities);

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.
=======
// 2. For the longest word. Create a function to find the longest word in a given string. i.e. tip: use split method!

// longestWord('this is a web development course'); // ➞ 'development'
>>>>>>> d8cca8d3c2eff81754d50e7fbd52094fcaeb6a3c

allCities.splice(1, 0, 'Washington');
console.log(allCities);

<<<<<<< HEAD
// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
console.log(allCities.join(', ')); //puts all arrays together into one
=======
const findVowels = str => {
    let sum = 0;
    const strVowels = 'aeiou';
    for (let i = 0; i < str.length; i++) {
        if (strVowels.indexOf(str[i]) !== -1) {
            sum++;
        }
    }
    return sum;
};
console.log(findVowels('this is a string'));
>>>>>>> d8cca8d3c2eff81754d50e7fbd52094fcaeb6a3c


// Expected Outputs: 
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh" 

// **Bonus**

// 1. Write a program to reverse the string: "Hello World".

const reverseString = 'hello world';
const myArray = reverseString.split('');
console.log(myArray);
myArray.reverse();
console.log(myArray);
console.log(myArray.join(''));


// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.
// 2. Make an array of your parents' names.
const mySiblins = ['Joao', 'Bianca'];
const parentsNames = ['Ricardo', 'Maria'];
const allNames = mySiblins.concat(parentsNames);
allNames.push('Malbec', 'Ozzy');
console.log(allNames);

allNames.reverse();
console.log(allNames)

// 3. Combine these two arrays.
// 4. Add your pets' names.
// 5. Reverse the order of the array.
// 6. Access one of your parents' names.
// 7. Update the name of one of your parents. 
