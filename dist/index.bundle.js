(self["webpackChunklearning_webpack"] = self["webpackChunklearning_webpack"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/print.js");



function component(){
    const element = document.createElement('div')
    const button = document.createElement('button')
    
    element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'Webpack'], ' ')
    
    button.innerHTML = 'Click me and check the console!'
    button.onclick = _print__WEBPACK_IMPORTED_MODULE_1__.default

    element.appendChild(button)

    return element
}


document.body.appendChild(component())

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ printMe)
/* harmony export */ });
function printMe(){
    console.log('I get called from print.js')
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = __webpack_require__.O(undefined, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybmluZy13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2xlYXJuaW5nLXdlYnBhY2svLi9zcmMvcHJpbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFzQjtBQUNPOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGtEQUFNOztBQUU5QjtBQUNBLHFCQUFxQiwyQ0FBTzs7QUFFNUI7O0FBRUE7QUFDQTs7O0FBR0Esc0M7Ozs7Ozs7Ozs7Ozs7OztBQ2xCZTtBQUNmO0FBQ0EsQyIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcbmltcG9ydCBwcmludE1lIGZyb20gJy4vcHJpbnQnXHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKXtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIFxyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICdXZWJwYWNrJ10sICcgJylcclxuICAgIFxyXG4gICAgYnV0dG9uLmlubmVySFRNTCA9ICdDbGljayBtZSBhbmQgY2hlY2sgdGhlIGNvbnNvbGUhJ1xyXG4gICAgYnV0dG9uLm9uY2xpY2sgPSBwcmludE1lXHJcblxyXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pXHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpe1xyXG4gICAgY29uc29sZS5sb2coJ0kgZ2V0IGNhbGxlZCBmcm9tIHByaW50LmpzJylcclxufSJdLCJzb3VyY2VSb290IjoiIn0=