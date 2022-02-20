const ui = (() => {
  function initSearch(handleSearchSubmit) {
    const search = document.querySelector('.js-search');
    search.addEventListener('submit', (e) => { handleSearchSubmit(_getInputValue(), e) });
  }


  function displayResults(data) {
    document.querySelector('.js-temp').textContent = data['temp'];
    document.querySelector('.js-location').textContent = `${data['name']}, ${data['country']}`;
    document.querySelector('.js-feels-like').textContent = data['feels_like'];
    document.querySelector('.js-humidity').textContent = data['humidity'];
    document.querySelector('.js-wind-speed').textContent = data['wind_speed'];
  }

  function _getInputValue() {
    return document.querySelector('.js-input').value;
  }

  return {
    initSearch,
    displayResults
  };
})();

export default ui;