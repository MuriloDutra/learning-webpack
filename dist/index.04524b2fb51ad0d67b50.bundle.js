(self["webpackChunklearning_webpack"] = self["webpackChunklearning_webpack"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

//import print from './print'

async function getComponent(){
    const { default: _ } = await __webpack_require__.e(/*! import() */ "vendors").then(__webpack_require__.t.bind(__webpack_require__, /*! lodash */ "./node_modules/lodash/lodash.js", 23))
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //element.onclick = print.bind(null, 'Hello Webpack!!!');

    return element
}

getComponent()
    .then((component) => {
        document.body.appendChild(component)
    })

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybmluZy13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQSxXQUFXLGFBQWEsU0FBUywySkFBZ0I7QUFDakQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssQyIsImZpbGUiOiJpbmRleC4wNDUyNGIyZmI1MWFkMGQ2N2I1MC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBwcmludCBmcm9tICcuL3ByaW50J1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29tcG9uZW50KCl7XHJcbiAgICBjb25zdCB7IGRlZmF1bHQ6IF8gfSA9IGF3YWl0IGltcG9ydCgnbG9kYXNoJylcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xyXG4gICAgLy9lbGVtZW50Lm9uY2xpY2sgPSBwcmludC5iaW5kKG51bGwsICdIZWxsbyBXZWJwYWNrISEhJyk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuZ2V0Q29tcG9uZW50KClcclxuICAgIC50aGVuKChjb21wb25lbnQpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudClcclxuICAgIH0pIl0sInNvdXJjZVJvb3QiOiIifQ==