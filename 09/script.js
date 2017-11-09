const dogs = [
  { name: 'Azor', age: 2 },
  { name: 'Burek', age: 8 },
  { name: 'Reksio', age: 5 }
];

const paragraph = document.querySelector('.change-me');

function makeBigGreen() {
  // console.log(this);
  this.style.color = '#BADA55';
  this.style.fontSize = '50px';
}

paragraph.addEventListener('click', makeBigGreen);

// regular
console.log('%cA regular console.log:', 'font-size: 16px');
console.log('C\'mon children, don\'t be shy just give it your best shot.');

// interpolation
console.log('%c\nAn interpolation in consol.log:', 'font-size: 16px');
console.log('- Do you prefer going by %s or by %s?\n- How about taking a %s?', '🚲', '👣','taxi');

// styling
console.log('%c\nA styling example in console.log:', 'font-size: 16px');
console.log('%cA big, blue font on a gray background...', 'font-size:50px; background:grey; color:blue')

// warning!
console.log('%c\nA warning example in console.log:', 'font-size: 16px');
console.warn('Danger zone!');

// Error :|
console.log('%c\nAn error example in console.log:', 'font-size: 16px');
console.error('Houston, we have a problem.');

// Info
console.log('%c\nAn info example in console.log:', 'font-size: 16px');
console.info('The best place for a tent is always a little further away.. (Zofia Czerwińska)');

// Testing
console.log('%c\nA console.assert example:', 'font-size: 16px');
console.assert(paragraph.classList.contains('ouch'), 'That is wrong!');

// clearing
// console.clear();

// viewing DOM Elements
console.log('%c\nDOM elements displayin in regular console.log:', 'font-size: 16px');
console.log(paragraph);
console.log('%c\nDOM elements displayin in console.dir:', 'font-size: 16px');
console.dir(paragraph);

// grouping together
console.log('%c\nA console.group example:', 'font-size: 16px');
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

console.log('%c\nA console.group example (with collapsing):', 'font-size: 16px');
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// table displaying
console.log('%c\nA console.table example:', 'font-size: 16px');
console.table(dogs);

// counting
console.log('%c\nA console.count example:', 'font-size: 16px');
console.count('Ala Makota');
console.count('Ala Makota');
console.count('Kot lubi Alę');
console.count('Kot lubi Alę');
console.count('Ala Makota');
console.count('Kot lubi Alę');
console.count('Ala Makota');
console.count('Kot lubi Alę');
console.count('Kot lubi Alę');
console.count('Kot lubi Alę');

// timing
console.log('%c\nA console.time example:', 'font-size: 16px');
console.time('fetching github data');
fetch('https://api.github.com/users/beatrycze')
  .then(response => response.json())
  .then(data => {
    console.timeEnd('fetching github data');
    console.log(data);
  });
