"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/AddProjectModal.tsx":
/*!****************************************!*\
  !*** ./components/AddProjectModal.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddProjectModal: function() { return /* binding */ AddProjectModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Dialog/Dialog.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/DialogTitle/DialogTitle.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/DialogContent/DialogContent.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/DialogActions/DialogActions.js\");\n/* harmony import */ var _barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst AddProjectModal = (param)=>{\n    let { open, onClose, onAdd } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        await onAdd(title, description);\n        setIsSubmitting(false);\n        setTitle(\"\");\n        setDescription(\"\");\n        onClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        open: open,\n        onClose: onClose,\n        maxWidth: \"sm\",\n        fullWidth: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    children: \"Add Checkin\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            autoFocus: true,\n                            margin: \"dense\",\n                            label: \"Title\",\n                            fullWidth: true,\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            margin: \"dense\",\n                            label: \"Description\",\n                            fullWidth: true,\n                            multiline: true,\n                            rows: 4,\n                            value: description,\n                            onChange: (e)=>setDescription(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            onClick: onClose,\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            type: \"submit\",\n                            variant: \"contained\",\n                            disabled: isSubmitting,\n                            children: isSubmitting ? \"Adding...\" : \"Add\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddProjectModal, \"Rkj+Duidhad9bg8QaBIMzA7qMo8=\");\n_c = AddProjectModal;\nvar _c;\n$RefreshReg$(_c, \"AddProjectModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWRkUHJvamVjdE1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFTVjtBQUdoQixNQUFNTyxrQkFBa0I7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFOztJQUN0RCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYSxhQUFhQyxlQUFlLEdBQUdkLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2UsY0FBY0MsZ0JBQWdCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNpQixPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBR3JDLE1BQU1tQixlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCTCxnQkFBZ0I7UUFDaEIsTUFBTU4sTUFBTUMsT0FBT0U7UUFDbkJHLGdCQUFnQjtRQUNoQkosU0FBUztRQUNURSxlQUFlO1FBQ2ZMO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1IsMklBQU1BO1FBQUNPLE1BQU1BO1FBQU1DLFNBQVNBO1FBQVNhLFVBQVM7UUFBS0MsU0FBUztrQkFDM0QsNEVBQUNDO1lBQUtDLFVBQVVOOzs4QkFDZCw4REFBQ2pCLDJJQUFXQTs4QkFBQzs7Ozs7OzhCQUNiLDhEQUFDQywySUFBYUE7O3NDQUNaLDhEQUFDRSwySUFBU0E7NEJBQ1JxQixTQUFTOzRCQUNUQyxRQUFPOzRCQUNQQyxPQUFNOzRCQUNOTCxTQUFTOzRCQUNUTSxPQUFPbEI7NEJBQ1BtQixVQUFVLENBQUNWLElBQU1SLFNBQVNRLEVBQUVXLE1BQU0sQ0FBQ0YsS0FBSzs0QkFDeENHLFFBQVE7Ozs7OztzQ0FFViw4REFBQzNCLDJJQUFTQTs0QkFDUnNCLFFBQU87NEJBQ1BDLE9BQU07NEJBQ05MLFNBQVM7NEJBQ1RVLFNBQVM7NEJBQ1RDLE1BQU07NEJBQ05MLE9BQU9oQjs0QkFDUGlCLFVBQVUsQ0FBQ1YsSUFBTU4sZUFBZU0sRUFBRVcsTUFBTSxDQUFDRixLQUFLOzRCQUM5Q0csUUFBUTs7Ozs7Ozs7Ozs7OzhCQUlaLDhEQUFDNUIsMklBQWFBOztzQ0FDWiw4REFBQ0UsMklBQU1BOzRCQUFDNkIsU0FBUzFCO3NDQUFTOzs7Ozs7c0NBQzFCLDhEQUFDSCwySUFBTUE7NEJBQUM4QixNQUFLOzRCQUFTQyxTQUFROzRCQUFZQyxVQUFVdkI7c0NBQ2pEQSxlQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFDLEVBQUU7R0FwRFdSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRkUHJvamVjdE1vZGFsLnRzeD82ZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nVGl0bGUsXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0FjdGlvbnMsXG4gIFRleHRGaWVsZCxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcblxuZXhwb3J0IGNvbnN0IEFkZFByb2plY3RNb2RhbCA9ICh7IG9wZW4sIG9uQ2xvc2UsIG9uQWRkIH0pID0+IHtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShbXSk7XG5cblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICBhd2FpdCBvbkFkZCh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgc2V0VGl0bGUoXCJcIik7XG4gICAgc2V0RGVzY3JpcHRpb24oXCJcIik7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtvbkNsb3NlfSBtYXhXaWR0aD1cInNtXCIgZnVsbFdpZHRoPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxEaWFsb2dUaXRsZT5BZGQgQ2hlY2tpbjwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxuICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuXG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbG9zZX0+Q2FuY2VsPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9PlxuICAgICAgICAgICAge2lzU3VibWl0dGluZyA/IFwiQWRkaW5nLi4uXCIgOiBcIkFkZFwifVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9EaWFsb2c+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRGlhbG9nIiwiRGlhbG9nVGl0bGUiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nQWN0aW9ucyIsIlRleHRGaWVsZCIsIkJ1dHRvbiIsIkFkZFByb2plY3RNb2RhbCIsIm9wZW4iLCJvbkNsb3NlIiwib25BZGQiLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsImltYWdlIiwic2V0SW1hZ2UiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYXhXaWR0aCIsImZ1bGxXaWR0aCIsImZvcm0iLCJvblN1Ym1pdCIsImF1dG9Gb2N1cyIsIm1hcmdpbiIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwibXVsdGlsaW5lIiwicm93cyIsIm9uQ2xpY2siLCJ0eXBlIiwidmFyaWFudCIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AddProjectModal.tsx\n"));

/***/ })

});