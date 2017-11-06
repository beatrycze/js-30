import { endpoint, numberWithCommas } from './utils/utils.js';

(() => {
  const cities = [];
  const defaultHtml = `<li>Filter for a city</li>
    <li>or a state</li>`;
  const searchInput = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data));

  function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
      <li>
        <span class="name"><span class="city">${cityName}</span>, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
      `;
    }).join('');
    suggestions.innerHTML = searchInput.value ? html : defaultHtml;
  }

  function displayDefault() {
    suggestions.innerHTML = defaultHtml;
  }

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);

  displayDefault();

})();
