const ui = (() => {
  function initSearch(handleSearchSubmit) {
    const search = document.querySelector('.js-search');
    search.addEventListener('submit', handleSearchSubmit.bind(null, _getInputValue()));
  }

  function _getInputValue() {
    return document.querySelector('.js-input').value;
  }

  function displaySearchResults(results) {

  }

  return {
    initSearch,
  };
})();

export default ui;