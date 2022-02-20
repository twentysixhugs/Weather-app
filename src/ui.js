const ui = (() => {
  /* Init */

  function initSearch(handleSearchSubmit) {
    const search = document.querySelector('.js-search');
    search.addEventListener('submit', (e) => { handleSearchSubmit(_getInputValue(), e) });
  }

  function toggleLoading() {
    document.querySelector('.js-is-loading').classList.toggle('content__loading--active');
  }

  /* Output */

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
    toggleLoading,
    displayResults
  };
})();

export default ui;