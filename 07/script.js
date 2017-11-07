import { people, comments } from './data/data.js';

// Some and Every Checks
// Array.prototype.some() // is at least one person 18 or older?
const isAdult = people.some(people => (new Date()).getFullYear() - people.year >= 18);
console.log(`At least one person is 18 or older. ${isAdult.toString().toUpperCase()}`);
console.log({isAdult});

// Array.prototype.every() // is everyone 18 or older?
const areAllAdult = people.every(people => (new Date()).getFullYear() - people.year >= 18);
console.log(`Everyone is 18 or older. ${areAllAdult.toString().toUpperCase()}`);
console.log({areAllAdult});

// Array.prototype.find()
// Find the comment with the ID of 823423
const comment = comments.find(comment => comment.id === 823423);
console.log('The comment with the ID of 823423:');
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with the ID of 823423 
// and delete it from the oryginal Array
const index = comments.findIndex(comment => comment.id === 823423);
console.log(`The index of the comment with the ID of 823423: ${index}`);

// comments.splice(index, 1);
// console.table(comments);

// and create new Array without it (don't change the oryginal Array)

// const newComments = [
//   ...comments.slice(0, index),
//   ...comments.slice(index + 1)
// ];
// console.table(newComments);

const newComments = [...comments];
newComments.splice(index, 1);
console.log('The new array (without deleted comment):');
console.table(newComments);
