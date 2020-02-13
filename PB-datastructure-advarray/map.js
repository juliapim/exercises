//# Map, Filter, Reduce

//#### 1. Get total orders
//* Return the total amount of orders. 

const initialValue = 0;
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];
const sum = orders.reduce(function (total, currentValue) {
    return total + currentValue.amount;
}, initialValue);

console.log(sum);

console.log("=================== 2 ======================");

//#### 2. Increment by 1
//```javascript 
const arrayOfNumbers = [3, 45, 6, 56, 7, 9]; 
 
//* Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

const increment = arrayOfNumbers.map( item => item + 1 );
console.log(increment);
console.log("=================== 3 ======================");
//#### 3. Filter Evens
//* Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.
const filterEvens = (array) => {
    return array.filter(item => item % 2===0);
};

    
//* Examples:
//```javascript
console.log(filterEvens([1,2,3,11,12,13])); //returns [2,12]
filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
console.log("=================== 4 ======================");
//#### 4. Filter Friends
//* Given an array, create a function which filters array based on a search query.

//* Examples

//```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
const filterItems = (array, string)=>{
    return array.filter(word => word.toLowerCase().includes(string));
};
console.log(filterItems(friends, 'ka')); // ["Rika"];
console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

console.log("=================== 5 ======================");

//#### 5. Sum Up
//* Write a function called sum that uses the reduce method to sum up an array of numbers. 
const sum3 = (array) =>{
    return array.reduce(((a, b )=> a + b ),0);
};

//* Examples:
//```javascript
console.log(sum3([1,2,3,4,5])); //returns 15
console.log(sum3([6,7,7])); //returns 20

console.log("=================== 6 ======================");
//#### 6. Square Root
//* Given an array of numbers, find the square root of each element in the array.
const aRei = [1,4,6,7,99];
const squareRoot = aRei.map(aRei => Math.sqrt(aRei));

console.log(squareRoot);