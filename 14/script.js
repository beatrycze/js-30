// start with strings, numbers and booleans
let name = 'Jack';
let name2 = name;
console.log(name, name2);
name = 'Billy';
console.log(name, name2);

let age = 80;
let age2 = age;
console.log(age, age2);
age = 85;
console.log(age, age2);

let isAlive = true;
let isAlive2 = isAlive;
console.log(isAlive, isAlive2);
isAlive = false;
console.log(isAlive, isAlive2);


// Let's say we have an array
const players = ['John', 'Paul', 'George', 'Ringo'];

console.log('The "original" array:');
console.log(players);

// and we want to make a copy of it.
// You might think we can just do something like this:
// const band = players;

// console.log(players, band);

// however what happens when we update that array?
// band[3] = 'Lucy';

// now here is the problem!
// oh no - we have edited the original array too!
// console.log(players, band);

// Why? It's because that is an array REFERENCE, not an array COPY. They both point to the same array!
// So, how do we fix this? We take a copy instead!

// one way
const band1 = players.slice();

console.log('The "original" array and a new one - created by slice method:');
console.log(players, band1);

// or create a new array and concat the old one in
const band2 = [].concat(players);

console.log('The "original" array and a new one - created by concat method:');
console.log(players, band2);

// or use the new ES6 Spread
const band3 = [...players];
const band4 = Array.from(players);

console.log('The "original" array and a new ones - created by ES6 spread operator & Array.from method:');
console.log(players, band3, band4);

// now when we update it, the original one isn't changed
band1[0] = 'Lucy';
band2[1] = 'Lucy';
band3[2] = 'Lucy';
band4[3] = 'Lucy';

console.log(players, band1, band2, band3, band4);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Jack',
  surname: 'Nicholson',
  age: 80,
  starredAt: {
    movie1: 'One Flew Over the Cuckoo\'s Nest',
    movie2: 'The Shining'
  }
};

console.log('The "original" object:');
console.log(person);
// and think we make a copy:
// const actor = person;
// actor.age = 99;

// console.log(person, actor);
// how do we take a copy instead?
const person1 = Object.assign({}, person, {height: 177, isMarried: true});

console.log('The "original" object and a new one - created by Object.assign:');
console.log(person, person1);

// We will hopefully soon see the object ...spread
// const person2 = {...person};


// Things to note - this is only 1 LEVEL DEEP - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
// person1.starredAt.movie1 = '???';

// console.log('The "original" object and a new one - created by Object.assign and with reassigned property in the object at deeper level:');
// console.log(person, person1);

const person3 = JSON.parse(JSON.stringify(person));

// person3.isAlive = true;
person3.starredAt.movie1 = '???';

console.log('The "original" object and a new one - created by JSON.parse + JSON.stringify and with reassigned property in the object at deeper level:');
console.log(person, person3);
