// # Destructuring

// **Instructions**
// #### 1. Array Destructuring
// * Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task.

let fruit;
let vegetable;
let food;
[fruit, vegetable, ...food] = ['banana', 'cucumber', 'bread', 'breads', 'cakes', 'pizza'];
console.log(fruit);
console.log(vegetable);
console.log(food);

// #### 2.Object Destructuring
// * Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values. 
let bianca, joao, balaz, nicolo, julien, bendis, nagster, constantine, martina, plamen;
({ bianca, joao, balaz, nicolo, julien, bendis, nagster, constantine, martina, plamen } = { bianca: 'Bee', joao: 'Freddy Mercury', balaz: 'Elvis', nicolo: 'Popcorn', julien: 'Itamar', bendis: 'Pikachu', nagster: 'Gangster', constantine: 'Zombie', martina: 'Cat Woman', plamen: 'Plum' });

console.log(bianca);
console.log(joao);
console.log(balaz);
console.log(nicolo);
console.log(julien);
console.log(bendis);
console.log(nagster);
console.log(constantine);
console.log(martina);
console.log(plamen);



// #### 3. Parameters: Object Destructuring 
// * Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
// * Then, create a function to display all of the band/musician's data. 
// const myMusic = {
//     name: 'Elis Regina',
//     greatestHit: 'Águas de Março',
//     nationality: 'Brazilian',
//     genre: 'MPB, Samba, Rock, Bossa nova',
//     musician: function ({ name, greatestHit, nationality, genre }) {
//         return `${name} is a ${nationality} singer. The musician sings ${genre} and her greatest Hit is ${greatestHit}`
//     }

// };

const myMusic = {
    name: 'Elis Regina',
    greatestHit: 'Águas de Março',
    nationality: 'Brazilian',
    genre: 'MPB, Samba, Rock, Bossa nova'

};

const musician = ({ name, greatestHit, nationality, genre }) => {
    return `${name} is a ${nationality} singer. The musician sings ${genre} and her greatest Hit is ${greatestHit}`
}

console.log(musician(myMusic));



// * Example
// ```javascript
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
// ```