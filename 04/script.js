import { inventors, people } from './data/data.js';

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventorsBornedInFifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(`The inventors who were born in the 1500's:`);
console.table(inventorsBornedInFifteen);


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsFullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(`The inventors' first and last names list:`);
console.table(inventorsFullNames);


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsByBirthDate = inventors.slice()
  .sort((a, b) => a.year - b.year);
console.log(`The inventors sorted by birthdate, from the oldest to the youngest:`);
console.table(inventorsByBirthDate);


// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const inventorsLengthLiveSum = inventors.reduce( (aggr, inventor) => {
  return aggr += inventor.passed - inventor.year;
}, 0);
console.log(`The sum of the inventors' lives length: ${inventorsLengthLiveSum}`);


// 5. Sort the inventors by years lived
const inventorsByLengthOfLiveDesc = inventors.slice().sort((a, b) => {
  return (b.passed - b.year) - (a.passed - a.year);
});
console.log(`The inventors sorted by length of their live, from the longest to the shortest:`);
console.table(inventorsByLengthOfLiveDesc);


// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// The effect is possible to see at the JS console opened in the below page:
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = [...category.querySelectorAll('a')];
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));
// console.log(`A list of Boulevards in Paris that contain 'de' anywhere in the name:`);
// console.table(de);


// 7. Sort exercise
// Sort the people alphabetically by last name
const peopleByLastNameAlpha = people.slice()
  .sort((a, b) => {
    const aLastName = a.split(',')[0];
    const bLastName = b.split(',')[0];
    if(aLastName > bLastName) {
      return 1;
    } else if (aLastName < bLastName) {
      return -1;
    } else {
      return 0;
    };
  });
console.log(`The people sorted alphabetically by the last name:`);
console.table(peopleByLastNameAlpha);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const sumOfInstances = data.reduce( (aggr, item) => {
  if( !(item in aggr) ) {
    aggr[item] = 0;
  }
  aggr[item] += 1;
  return aggr;
}, {});
console.log(`The sum of the instances from the array:`);
console.log(sumOfInstances);
