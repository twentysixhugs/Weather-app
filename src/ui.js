const ui = (() => {
  function initSearch(handleSearchSubmit) {
    const search = document.querySelector('.js-search');
    search.addEventListener('submit', handleSearchSubmit)
  }

  return {
    initSearch
  };
})();

export default ui;