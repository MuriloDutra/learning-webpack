(self["webpackChunklearning_webpack"] = self["webpackChunklearning_webpack"] || []).push([["index"],{

/***/ 138:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print */ 569);


async function getComponent(){
    const { default: _ } = await __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ 486, 23))
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick = _print__WEBPACK_IMPORTED_MODULE_0__.default.bind(null, 'Hello Webpack!!!');

    return element
}

getComponent()
    .then((component) => {
        document.body.appendChild(component)
    })

/***/ }),

/***/ 569:
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print)
/* harmony export */ });
function print(text){
    console.log(text)
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(138));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybmluZy13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYnBhY2svLi9zcmMvcHJpbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMkI7O0FBRTNCO0FBQ0EsV0FBVyxhQUFhLFNBQVMsNkhBQWdCO0FBQ2pEOztBQUVBO0FBQ0Esc0JBQXNCLGdEQUFVOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssQzs7Ozs7Ozs7Ozs7Ozs7O0FDZlU7QUFDZjtBQUNBLEMiLCJmaWxlIjoiaW5kZXguODQwOGU1ODgyODE5MWY3MGMwOWIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaW50IGZyb20gJy4vcHJpbnQnXHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQoKXtcclxuICAgIGNvbnN0IHsgZGVmYXVsdDogXyB9ID0gYXdhaXQgaW1wb3J0KCdsb2Rhc2gnKVxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3ZWJwYWNrJ10sICcgJyk7XHJcbiAgICBlbGVtZW50Lm9uY2xpY2sgPSBwcmludC5iaW5kKG51bGwsICdIZWxsbyBXZWJwYWNrISEhJyk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZ2V0Q29tcG9uZW50KClcclxuICAgIC50aGVuKChjb21wb25lbnQpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudClcclxuICAgIH0pIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnQodGV4dCl7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXh0KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==