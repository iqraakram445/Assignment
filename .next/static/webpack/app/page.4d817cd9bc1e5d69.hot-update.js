/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./hooks/useProjects.ts":
/*!******************************!*\
  !*** ./hooks/useProjects.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useProjects: function() { return /* binding */ useProjects; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/firebase */ \"(app-pages-browser)/./lib/firebase.ts\");\n/* harmony import */ var _lib_firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction useProjects() {\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        // Set up real-time listener for projects\n        const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"projects\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)(\"createdAt\", \"desc\"));\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(q, (snapshot)=>{\n            setProjects(snapshot.docs.map((doc)=>{\n                var _doc_data_createdAt;\n                return {\n                    id: doc.id,\n                    ...doc.data(),\n                    createdAt: ((_doc_data_createdAt = doc.data().createdAt) === null || _doc_data_createdAt === void 0 ? void 0 : _doc_data_createdAt.toDate()) || new Date()\n                };\n            }));\n        });\n        return unsubscribe;\n    }, []);\n    const addProject = async (title, description)=>{\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_lib_firebase__WEBPACK_IMPORTED_MODULE_2__.db, \"projects\"), {\n            title,\n            description,\n            createdAt: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)(),\n            imageUrl: \"https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n            owner: {\n                name: \"James Doe\",\n                avatar: \"https://i.pravatar.cc/150?u=james\"\n            }\n        });\n    };\n    return {\n        projects,\n        addProject\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL3VzZVByb2plY3RzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUN5RDtBQUNoRTtBQWU3QixTQUFTUztJQUNkLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBWSxFQUFFO0lBRXREQyxnREFBU0EsQ0FBQztRQUNSLHlDQUF5QztRQUN6QyxNQUFNVyxJQUFJVCx5REFBS0EsQ0FBQ0QsOERBQVVBLENBQUNNLDZDQUFFQSxFQUFFLGFBQWFKLDJEQUFPQSxDQUFDLGFBQWE7UUFDakUsTUFBTVMsY0FBY1IsOERBQVVBLENBQUNPLEdBQUcsQ0FBQ0U7WUFDakNILFlBQVlHLFNBQVNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQTtvQkFHakJBO3VCQUh5QjtvQkFDcENDLElBQUlELElBQUlDLEVBQUU7b0JBQ1YsR0FBR0QsSUFBSUUsSUFBSSxFQUFFO29CQUNiQyxXQUFXSCxFQUFBQSxzQkFBQUEsSUFBSUUsSUFBSSxHQUFHQyxTQUFTLGNBQXBCSCwwQ0FBQUEsb0JBQXNCSSxNQUFNLE9BQU0sSUFBSUM7Z0JBQ25EOztRQUNGO1FBRUEsT0FBT1Q7SUFDVCxHQUFHLEVBQUU7SUFFTCxNQUFNVSxhQUFhLE9BQU9DLE9BQWVDO1FBQ3ZDLE1BQU1uQiwwREFBTUEsQ0FBQ0osOERBQVVBLENBQUNNLDZDQUFFQSxFQUFFLGFBQWE7WUFDdkNnQjtZQUNBQztZQUNBTCxXQUFXYixtRUFBZUE7WUFDMUJtQixVQUFVO1lBQ1ZDLE9BQU87Z0JBQ0xDLE1BQU07Z0JBQ05DLFFBQVE7WUFDVjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO1FBQUVuQjtRQUFVYTtJQUFXO0FBQ2hDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZVByb2plY3RzLnRzPzIzMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgcXVlcnksIG9yZGVyQnksIG9uU25hcHNob3QsIGFkZERvYywgc2VydmVyVGltZXN0YW1wIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9saWIvZmlyZWJhc2UnXG5cblxuZXhwb3J0IGludGVyZmFjZSBQcm9qZWN0IHtcbiAgaWQ6IHN0cmluZ1xuICB0aXRsZTogc3RyaW5nXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgY3JlYXRlZEF0OiBEYXRlXG4gIGltYWdlVXJsOiBzdHJpbmdcbiAgb3duZXI6IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBhdmF0YXI6IHN0cmluZ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VQcm9qZWN0cygpIHtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZTxQcm9qZWN0W10+KFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gU2V0IHVwIHJlYWwtdGltZSBsaXN0ZW5lciBmb3IgcHJvamVjdHNcbiAgICBjb25zdCBxID0gcXVlcnkoY29sbGVjdGlvbihkYiwgJ3Byb2plY3RzJyksIG9yZGVyQnkoJ2NyZWF0ZWRBdCcsICdkZXNjJykpXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvblNuYXBzaG90KHEsIChzbmFwc2hvdCkgPT4ge1xuICAgICAgc2V0UHJvamVjdHMoc25hcHNob3QuZG9jcy5tYXAoZG9jID0+ICh7XG4gICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgIC4uLmRvYy5kYXRhKCksXG4gICAgICAgIGNyZWF0ZWRBdDogZG9jLmRhdGEoKS5jcmVhdGVkQXQ/LnRvRGF0ZSgpIHx8IG5ldyBEYXRlKCksXG4gICAgICB9KSkgYXMgUHJvamVjdFtdKVxuICAgIH0pXG5cbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSwgW10pXG5cbiAgY29uc3QgYWRkUHJvamVjdCA9IGFzeW5jICh0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsICdwcm9qZWN0cycpLCB7XG4gICAgICB0aXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgY3JlYXRlZEF0OiBzZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9wbHVzLnVuc3BsYXNoLmNvbS9wcmVtaXVtX3Bob3RvLTE2ODM4NjU3NzYwMzItMDdiZjcwYjBhZGQxP3E9ODAmdz0xNjMyJmF1dG89Zm9ybWF0JmZpdD1jcm9wJml4bGliPXJiLTQuMC4zJml4aWQ9TTN3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDhmQSUzRCUzRCcsXG4gICAgICBvd25lcjoge1xuICAgICAgICBuYW1lOiAnSmFtZXMgRG9lJyxcbiAgICAgICAgYXZhdGFyOiAnaHR0cHM6Ly9pLnByYXZhdGFyLmNjLzE1MD91PWphbWVzJ1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4geyBwcm9qZWN0cywgYWRkUHJvamVjdCB9XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIm9yZGVyQnkiLCJvblNuYXBzaG90IiwiYWRkRG9jIiwic2VydmVyVGltZXN0YW1wIiwiZGIiLCJ1c2VQcm9qZWN0cyIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJxIiwidW5zdWJzY3JpYmUiLCJzbmFwc2hvdCIsImRvY3MiLCJtYXAiLCJkb2MiLCJpZCIsImRhdGEiLCJjcmVhdGVkQXQiLCJ0b0RhdGUiLCJEYXRlIiwiYWRkUHJvamVjdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZVVybCIsIm93bmVyIiwibmFtZSIsImF2YXRhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useProjects.ts\n"));

/***/ }),

/***/ "(app-pages-browser)/./lib/firebase.ts":
/*!*************************!*\
  !*** ./lib/firebase.ts ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});