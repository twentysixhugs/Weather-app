/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api_fetcher.js":
/*!****************************!*\
  !*** ./src/api_fetcher.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// 6275fbc643b73392b948f38f9f200287
// https://api.openweathermap.org/data/2.5/weather?q=London&appid=6275fbc643b73392b948f38f9f200287

async function getWeatherData(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=6275fbc643b73392b948f38f9f200287`,
    { mode: 'cors' }
  );

  if (!response.ok) {
    const error = new Error('Location not found.');
    error.name = "NothingFound";

    throw error;
  };
  return response.json();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherData);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getProcessedWeatherData": () => (/* binding */ getProcessedWeatherData)
/* harmony export */ });
class Data {
  constructor(...propsAndValues) {
    propsAndValues.forEach(propAndValue => {
      this[propAndValue[0]] = propAndValue[1];
    });
  }
}

function FtoC(t) {
  return Math.round((t - 32) * 5 / 9);
}

function getProcessedWeatherData(data) {
  const processedData = new Data(
    ['feels_like_imperial', Math.round(data.main.feels_like)],
    ['feels_like_metric', FtoC(data.main.feels_like)],
    ['temp_imperial', Math.round(data.main.temp)],
    ['temp_metric', FtoC(data.main.temp)],
    ['humidity', data.main.humidity],
    ['name', data.name],
    ['country', data.sys.country],
    ['wind_speed', data.wind.speed],
  );

  return processedData;
}




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    toggleBtn.addEventListener('click', _handleUnitsToggle);
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
    _showUnits(_getUnitsChar());
    _clearInputField();
  }

  function _clearInputField() {
    document.querySelector('.js-input').value = '';
  }


  function _showUnits(units) {
    const unitsElements = document.querySelectorAll('.js-unit');

    unitsElements.forEach(el => {
      el.textContent = units;
    });
  }

  function _getUnitsChar() {
    return currentUnits === 'metric' ? '\xB0C' : '\xB0F'
  }

  function _handleUnitsToggle(e) {
    currentUnits = (currentUnits === 'metric') ? 'imperial' : 'metric';
    _showUnits(_getUnitsChar());
    _displayResults();

    e.target.textContent = (e.target.textContent === 'Celsius') ? 'Fahrenheit' : 'Celsius';
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_fetcher */ "./src/api_fetcher.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");




async function handleRequest(requestValue, e) {
  if (e) {
    e.preventDefault();
  }

  try {
    _ui__WEBPACK_IMPORTED_MODULE_2__["default"].toggleLoading();

    const processedWeatherData = await processRequest(requestValue);
    // output to DOM
    _ui__WEBPACK_IMPORTED_MODULE_2__["default"].handleSearchOutput(processedWeatherData);
  } catch (err) {
    alert(err.message);
  } finally {
    _ui__WEBPACK_IMPORTED_MODULE_2__["default"].toggleLoading();
  }
}

async function processRequest(requestValue) {
  let weatherData = await (0,_api_fetcher__WEBPACK_IMPORTED_MODULE_0__["default"])(requestValue);
  let processedWeatherData = await (0,_data__WEBPACK_IMPORTED_MODULE_1__.getProcessedWeatherData)(weatherData);;

  return processedWeatherData;
}


(async function init() {
  await handleRequest('Minsk');
  _ui__WEBPACK_IMPORTED_MODULE_2__["default"].initSearch(handleRequest);
  _ui__WEBPACK_IMPORTED_MODULE_2__["default"].initUnitToggle();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUF5RCxTQUFTO0FBQ2xFLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUNsQjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyx5Q0FBeUM7QUFDeEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNERBQTRELHNCQUFzQixJQUFJLHlCQUF5QjtBQUMvRztBQUNBO0FBQ0EsMkVBQTJFLGFBQWE7QUFDeEYsdUZBQXVGLGFBQWE7QUFDcEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLEVBQUU7Ozs7OztVQzFFakI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ007QUFDM0I7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx5REFBZ0I7O0FBRXBCO0FBQ0E7QUFDQSxJQUFJLDhEQUFxQjtBQUN6QixJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0osSUFBSSx5REFBZ0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQix3REFBYztBQUN4QyxtQ0FBbUMsOERBQXVCOztBQUUxRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsRUFBRSxzREFBYTtBQUNmLEVBQUUsMERBQWlCO0FBQ25CLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGlfZmV0Y2hlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gNjI3NWZiYzY0M2I3MzM5MmI5NDhmMzhmOWYyMDAyODdcbi8vIGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9TG9uZG9uJmFwcGlkPTYyNzVmYmM2NDNiNzMzOTJiOTQ4ZjM4ZjlmMjAwMjg3XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJEYXRhKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9aW1wZXJpYWwmYXBwaWQ9NjI3NWZiYzY0M2I3MzM5MmI5NDhmMzhmOWYyMDAyODdgLFxuICAgIHsgbW9kZTogJ2NvcnMnIH1cbiAgKTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoJ0xvY2F0aW9uIG5vdCBmb3VuZC4nKTtcbiAgICBlcnJvci5uYW1lID0gXCJOb3RoaW5nRm91bmRcIjtcblxuICAgIHRocm93IGVycm9yO1xuICB9O1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyRGF0YTsiLCJjbGFzcyBEYXRhIHtcbiAgY29uc3RydWN0b3IoLi4ucHJvcHNBbmRWYWx1ZXMpIHtcbiAgICBwcm9wc0FuZFZhbHVlcy5mb3JFYWNoKHByb3BBbmRWYWx1ZSA9PiB7XG4gICAgICB0aGlzW3Byb3BBbmRWYWx1ZVswXV0gPSBwcm9wQW5kVmFsdWVbMV07XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gRnRvQyh0KSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKCh0IC0gMzIpICogNSAvIDkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9jZXNzZWRXZWF0aGVyRGF0YShkYXRhKSB7XG4gIGNvbnN0IHByb2Nlc3NlZERhdGEgPSBuZXcgRGF0YShcbiAgICBbJ2ZlZWxzX2xpa2VfaW1wZXJpYWwnLCBNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKV0sXG4gICAgWydmZWVsc19saWtlX21ldHJpYycsIEZ0b0MoZGF0YS5tYWluLmZlZWxzX2xpa2UpXSxcbiAgICBbJ3RlbXBfaW1wZXJpYWwnLCBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKV0sXG4gICAgWyd0ZW1wX21ldHJpYycsIEZ0b0MoZGF0YS5tYWluLnRlbXApXSxcbiAgICBbJ2h1bWlkaXR5JywgZGF0YS5tYWluLmh1bWlkaXR5XSxcbiAgICBbJ25hbWUnLCBkYXRhLm5hbWVdLFxuICAgIFsnY291bnRyeScsIGRhdGEuc3lzLmNvdW50cnldLFxuICAgIFsnd2luZF9zcGVlZCcsIGRhdGEud2luZC5zcGVlZF0sXG4gICk7XG5cbiAgcmV0dXJuIHByb2Nlc3NlZERhdGE7XG59XG5cblxuZXhwb3J0IHtcbiAgZ2V0UHJvY2Vzc2VkV2VhdGhlckRhdGEsXG59OyIsImNvbnN0IHVpID0gKCgpID0+IHtcbiAgbGV0IGN1cnJlbnRVbml0cyA9ICdtZXRyaWMnOyAvLyBkZWZhdWx0XG4gIGxldCBkaXNwbGF5ZWREYXRhO1xuXG4gIC8qIEluaXQgKi9cblxuICBmdW5jdGlvbiBpbml0U2VhcmNoKGhhbmRsZVNlYXJjaFN1Ym1pdCkge1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1zZWFyY2gnKTtcbiAgICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHsgaGFuZGxlU2VhcmNoU3VibWl0KF9nZXRJbnB1dFZhbHVlKCksIGUpIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFVuaXRUb2dnbGUoKSB7XG4gICAgY29uc3QgdG9nZ2xlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRvZ2dsZS11bml0cycpO1xuICAgIHRvZ2dsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9oYW5kbGVVbml0c1RvZ2dsZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVMb2FkaW5nKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pcy1sb2FkaW5nJykuY2xhc3NMaXN0LnRvZ2dsZSgnY29udGVudF9fbG9hZGluZy0tYWN0aXZlJyk7XG4gIH1cblxuICAvKiBPdXRwdXQgKi9cblxuICBmdW5jdGlvbiBoYW5kbGVTZWFyY2hPdXRwdXQoZGF0YSkge1xuICAgIGRpc3BsYXllZERhdGEgPSBkYXRhO1xuICAgIF9kaXNwbGF5UmVzdWx0cyhkaXNwbGF5ZWREYXRhKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9kaXNwbGF5UmVzdWx0cygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbG9jYXRpb24nKS50ZXh0Q29udGVudCA9IGAke2Rpc3BsYXllZERhdGFbJ25hbWUnXX0sICR7ZGlzcGxheWVkRGF0YVsnY291bnRyeSddfWA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWh1bWlkaXR5JykudGV4dENvbnRlbnQgPSBkaXNwbGF5ZWREYXRhWydodW1pZGl0eSddO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy13aW5kLXNwZWVkJykudGV4dENvbnRlbnQgPSBkaXNwbGF5ZWREYXRhWyd3aW5kX3NwZWVkJ107XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRlbXAnKS50ZXh0Q29udGVudCA9IGRpc3BsYXllZERhdGFbYHRlbXBfJHtjdXJyZW50VW5pdHN9YF07XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZlZWxzLWxpa2UnKS50ZXh0Q29udGVudCA9IGRpc3BsYXllZERhdGFbYGZlZWxzX2xpa2VfJHtjdXJyZW50VW5pdHN9YF07XG4gICAgX3Nob3dVbml0cyhfZ2V0VW5pdHNDaGFyKCkpO1xuICAgIF9jbGVhcklucHV0RmllbGQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jbGVhcklucHV0RmllbGQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWlucHV0JykudmFsdWUgPSAnJztcbiAgfVxuXG5cbiAgZnVuY3Rpb24gX3Nob3dVbml0cyh1bml0cykge1xuICAgIGNvbnN0IHVuaXRzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdW5pdCcpO1xuXG4gICAgdW5pdHNFbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gdW5pdHM7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0VW5pdHNDaGFyKCkge1xuICAgIHJldHVybiBjdXJyZW50VW5pdHMgPT09ICdtZXRyaWMnID8gJ1xceEIwQycgOiAnXFx4QjBGJ1xuICB9XG5cbiAgZnVuY3Rpb24gX2hhbmRsZVVuaXRzVG9nZ2xlKGUpIHtcbiAgICBjdXJyZW50VW5pdHMgPSAoY3VycmVudFVuaXRzID09PSAnbWV0cmljJykgPyAnaW1wZXJpYWwnIDogJ21ldHJpYyc7XG4gICAgX3Nob3dVbml0cyhfZ2V0VW5pdHNDaGFyKCkpO1xuICAgIF9kaXNwbGF5UmVzdWx0cygpO1xuXG4gICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdDZWxzaXVzJykgPyAnRmFocmVuaGVpdCcgOiAnQ2Vsc2l1cyc7XG4gIH1cblxuICBmdW5jdGlvbiBfZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWlucHV0JykudmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGluaXRTZWFyY2gsXG4gICAgaW5pdFVuaXRUb2dnbGUsXG4gICAgdG9nZ2xlTG9hZGluZyxcbiAgICBoYW5kbGVTZWFyY2hPdXRwdXQsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1aTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBnZXRXZWF0aGVyRGF0YSBmcm9tICcuL2FwaV9mZXRjaGVyJ1xuaW1wb3J0IHsgZ2V0UHJvY2Vzc2VkV2VhdGhlckRhdGEgfSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgdWkgZnJvbSAnLi91aSdcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlUmVxdWVzdChyZXF1ZXN0VmFsdWUsIGUpIHtcbiAgaWYgKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICB0cnkge1xuICAgIHVpLnRvZ2dsZUxvYWRpbmcoKTtcblxuICAgIGNvbnN0IHByb2Nlc3NlZFdlYXRoZXJEYXRhID0gYXdhaXQgcHJvY2Vzc1JlcXVlc3QocmVxdWVzdFZhbHVlKTtcbiAgICAvLyBvdXRwdXQgdG8gRE9NXG4gICAgdWkuaGFuZGxlU2VhcmNoT3V0cHV0KHByb2Nlc3NlZFdlYXRoZXJEYXRhKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgYWxlcnQoZXJyLm1lc3NhZ2UpO1xuICB9IGZpbmFsbHkge1xuICAgIHVpLnRvZ2dsZUxvYWRpbmcoKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzUmVxdWVzdChyZXF1ZXN0VmFsdWUpIHtcbiAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEocmVxdWVzdFZhbHVlKTtcbiAgbGV0IHByb2Nlc3NlZFdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0UHJvY2Vzc2VkV2VhdGhlckRhdGEod2VhdGhlckRhdGEpOztcblxuICByZXR1cm4gcHJvY2Vzc2VkV2VhdGhlckRhdGE7XG59XG5cblxuKGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIGF3YWl0IGhhbmRsZVJlcXVlc3QoJ01pbnNrJyk7XG4gIHVpLmluaXRTZWFyY2goaGFuZGxlUmVxdWVzdCk7XG4gIHVpLmluaXRVbml0VG9nZ2xlKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9