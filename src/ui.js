const ui = (() => {
  let currentUnits = 'metric'; // default
  let displayedData;

  /* Init */

  function initSearch(handleSearchSubmit) {
    const search = document.querySelector('.js-search');
    search.addEventListener('submit', (e) => { handleSearchSubmit(_getInputValue(), e) });
  }

  function initUnitToggle() {
    const toggleBtn = document.querySelector('.js-toggle-units');
    toggleBtn.addEventListener('click', () => _handleUnitsToggle);
  }

  function toggleLoading() {
    document.querySelector('.js-is-loading').classList.toggle('content__loading--active');
  }

  /* Output */

  function handleSearchOutput(data) {
    displayedData = data;
    _displayResults(displayedData);
  }

  function _displayResults() {
    document.querySelector('.js-location').textContent = `${displayedData['name']}, ${displayedData['country']}`;
    document.querySelector('.js-humidity').textContent = displayedData['humidity'];
    document.querySelector('.js-wind-speed').textContent = displayedData['wind_speed'];
    document.querySelector('.js-temp').textContent = displayedData[`temp_${currentUnits}`];
    document.querySelector('.js-feels-like').textContent = displayedData[`feels_like_${currentUnits}`];
    _showUnits(currentUnits === 'metric' ? '\xB0C' : '\xB0F');
  }


  function _showUnits(units) {
    const unitsElements = document.querySelectorAll('.js-unit');

    unitsElements.forEach(el => {
      el.textContent = units;
    });
  }

  function _handleUnitsToggle() {

  }

  function _getInputValue() {
    return document.querySelector('.js-input').value;
  }

  return {
    initSearch,
    initUnitToggle,
    toggleLoading,
    handleSearchOutput,
  };
})();

export default ui;