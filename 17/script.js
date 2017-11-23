import bands from './data.js';

const listContainer = document.querySelector('#bands');

const bandsNamesToSort = bands.slice()
  .map(band => {
      if(band.startsWith('The ')) {
        return [band.substring(0,3), band.substring(3)];
      } else if (band.startsWith('A ')) {
        return [band.substring(0,1), band.substring(1)];
      } else if (band.startsWith('An ')) {
        return [band.substring(0,2), band.substring(2)];
      } else {
        return ['', band];
    }
  });
// console.log(bandsNamesToSort);

const bandsSortedTemp = bandsNamesToSort.slice()
  .sort((a, b) => {
    if(a[1] < b[1]) {
      return -1;
    } else if (a[1] > b[1]) {
      return 1;
    } else return 0;
  });
// console.log(bandsSortedTemp);

const bandsSorted = bandsSortedTemp.map(band => band[0].concat(band[1]) );
// console.log(bandsSorted);

const listElements = bandsSorted
  .map(band => `<li>${band}</li>`)
  .join('');

listContainer.innerHTML = listElements;
