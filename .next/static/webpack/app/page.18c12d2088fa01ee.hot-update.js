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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddProjectModal: function() { return /* binding */ AddProjectModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Dialog/Dialog.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/DialogTitle/DialogTitle.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/DialogContent/DialogContent.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/DialogActions/DialogActions.js\");\n/* harmony import */ var _barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Box,Button,Dialog,DialogActions,DialogContent,DialogTitle,TextField,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ \"(app-pages-browser)/./node_modules/react-dropzone/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddProjectModal = (param)=>{\n    let { open, onClose, onAdd } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { getRootProps, getInputProps } = (0,react_dropzone__WEBPACK_IMPORTED_MODULE_2__.useDropzone)({\n        accept: \"image/*\",\n        maxFiles: 1,\n        onDrop: (acceptedFiles)=>{\n            console.log(acceptedFiles);\n            setImage(acceptedFiles);\n        }\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        await onAdd(title, description);\n        setIsSubmitting(false);\n        setTitle(\"\");\n        setDescription(\"\");\n        onClose();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        open: open,\n        onClose: onClose,\n        maxWidth: \"sm\",\n        fullWidth: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: \"Add Checkin\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            autoFocus: true,\n                            margin: \"dense\",\n                            label: \"Title\",\n                            fullWidth: true,\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            margin: \"dense\",\n                            label: \"Description\",\n                            fullWidth: true,\n                            multiline: true,\n                            rows: 4,\n                            value: description,\n                            onChange: (e)=>setDescription(e.target.value),\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    mt: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            variant: \"h6\",\n                            children: \"Upload Image\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            ...getRootProps(),\n                            sx: {\n                                border: \"2px dashed #7B5AFF\",\n                                borderRadius: 2,\n                                padding: 4,\n                                textAlign: \"center\",\n                                color: \"#7B5AFF\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    ...getInputProps()\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    variant: \"body1\",\n                                    children: \"Click or drag file to this area to upload\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            onClick: onClose,\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_Button_Dialog_DialogActions_DialogContent_DialogTitle_TextField_Typography_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            type: \"submit\",\n                            variant: \"contained\",\n                            disabled: isSubmitting,\n                            children: isSubmitting ? \"Adding...\" : \"Add\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n                    lineNumber: 87,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ASA\\\\Desktop\\\\package-lock\\\\components\\\\AddProjectModal.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n}; // import React, { useState } from 'react';\n // import { Button, TextField, Container, CircularProgress } from '@mui/material';\n // import { storage, db } from '../lib/firebase'; // Import configuration\n // import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';\n // import { collection, addDoc, getDocs } from 'firebase/firestore';\n // export const AddProjectModal=()=>{\n //   const [title, setTitle] = useState('');\n //   const [file, setFile] = useState(null);\n //   const [uploading, setUploading] = useState(false);\n //   const [records, setRecords] = useState([]);\n //   // Handle file input change\n //   const handleFileChange = (e) => {\n //     setFile(e.target.files[0]);\n //   };\n //   // Handle form submission\n //   const handleSubmit = async (e) => {\n //     e.preventDefault();\n //     if (!title || !file) return;\n //     setUploading(true);\n //     try {\n //       // Create a reference to the storage location\n //       const storageRef = ref(storage, `images/${file.name}`);\n //       const uploadTask = uploadBytesResumable(storageRef, file);\n //       // Monitor upload progress\n //       uploadTask.on(\n //         'state_changed',\n //         (snapshot) => {\n //           // Optionally handle progress updates\n //         },\n //         (error) => {\n //           console.error('Upload error:', error);\n //           setUploading(false);\n //         },\n //         async () => {\n //           // Get the download URL\n //           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);\n //           console.log('File available at', downloadURL);\n //           // Save to Firestore\n //           await addDoc(collection(db, 'projects'), {\n //             title,\n //             imageUrl: downloadURL,\n //             createdAt: new Date(),\n //           });\n //           setUploading(false);\n //           setTitle('');\n //           setFile(null);\n //           alert('Upload successful!');\n //         }\n //       );\n //     } catch (error) {\n //       console.error('Error during file upload:', error);\n //       setUploading(false);\n //     }\n //   };\n //   // Fetch records from Firestore\n //   const fetchRecords = async () => {\n //     try {\n //       const querySnapshot = await getDocs(collection(db, 'uploads'));\n //       const recordsArray = querySnapshot.docs.map((doc) => ({\n //         id: doc.id,\n //         ...doc.data(),\n //       }));\n //       setRecords(recordsArray);\n //     } catch (error) {\n //       console.error('Error fetching records:', error);\n //     }\n //   };\n //   React.useEffect(() => {\n //     fetchRecords();\n //   }, []);\n //   return (\n //     <Container>\n //       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>\n //         <TextField\n //           label=\"Title\"\n //           variant=\"outlined\"\n //           value={title}\n //           onChange={(e) => setTitle(e.target.value)}\n //           style={{ marginBottom: '16px' }}\n //         />\n //         <input\n //           type=\"file\"\n //           onChange={handleFileChange}\n //           style={{ marginBottom: '16px' }}\n //         />\n //         <Button type=\"submit\" variant=\"contained\" color=\"primary\" disabled={uploading}>\n //           {uploading ? <CircularProgress size={24} /> : 'Upload'}\n //         </Button>\n //       </form>\n //       <div style={{ marginTop: '24px' }}>\n //         <h2>Uploaded Records</h2>\n //         {records.map((record) => (\n //           <div key={record.id}>\n //             <h3>{record.title}</h3>\n //             <img src={record.imageUrl} alt={record.title} style={{ maxWidth: '200px', marginBottom: '8px' }} />\n //           </div>\n //         ))}\n //       </div>\n //     </Container>\n //   );\n // };\n_s(AddProjectModal, \"CBQcyMEORjzusvuP1aK4fNEPcCE=\", false, function() {\n    return [\n        react_dropzone__WEBPACK_IMPORTED_MODULE_2__.useDropzone\n    ];\n});\n_c = AddProjectModal;\nvar _c;\n$RefreshReg$(_c, \"AddProjectModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQWRkUHJvamVjdE1vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFVVjtBQUNzQjtBQVF0QyxNQUFNVSxrQkFBa0I7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFOztJQUN0RCxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDZ0IsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDa0IsY0FBY0MsZ0JBQWdCLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNvQixPQUFPQyxTQUFTLEdBQUdyQiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sRUFBRXNCLFlBQVksRUFBRUMsYUFBYSxFQUFFLEdBQUdkLDJEQUFXQSxDQUFDO1FBQ2xEZSxRQUFRO1FBQ1JDLFVBQVU7UUFDVkMsUUFBUSxDQUFDQztZQUNQQyxRQUFRQyxHQUFHLENBQUNGO1lBQ1pOLFNBQVNNO1FBQ1g7SUFDRjtJQUVBLE1BQU1HLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJiLGdCQUFnQjtRQUNoQixNQUFNTixNQUFNQyxPQUFPRTtRQUNuQkcsZ0JBQWdCO1FBQ2hCSixTQUFTO1FBQ1RFLGVBQWU7UUFDZkw7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWCwwSkFBTUE7UUFBQ1UsTUFBTUE7UUFBTUMsU0FBU0E7UUFBU3FCLFVBQVM7UUFBS0MsU0FBUztrQkFDM0QsNEVBQUNDO1lBQUtDLFVBQVVOOzs4QkFDZCw4REFBQzVCLDBKQUFXQTs4QkFBQzs7Ozs7OzhCQUNiLDhEQUFDQywwSkFBYUE7O3NDQUNaLDhEQUFDRSwwSkFBU0E7NEJBQ1JnQyxTQUFTOzRCQUNUQyxRQUFPOzRCQUNQQyxPQUFNOzRCQUNOTCxTQUFTOzRCQUNUTSxPQUFPMUI7NEJBQ1AyQixVQUFVLENB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Q0FDcEIsZ0JBQWdCO0NBQ2hCLDRDQUE0QztDQUM1QyxvQ0FBb0M7Q0FDcEMscUNBQXFDO0NBQ3JDLGtDQUFrQztDQUNsQyxzQ0FBc0M7Q0FDdEMsa0hBQWtIO0NBQ2xILG1CQUFtQjtDQUNuQixjQUFjO0NBQ2QsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixPQUFPO0NBQ1AsS0FBSztHQTVMUVI7O1FBSzZCRCx1REFBV0E7OztLQUx4Q0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZGRQcm9qZWN0TW9kYWwudHN4PzZkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIERpYWxvZyxcbiAgRGlhbG9nVGl0bGUsXG4gIERpYWxvZ0NvbnRlbnQsXG4gIERpYWxvZ0FjdGlvbnMsXG4gIFRleHRGaWVsZCxcbiAgQnV0dG9uLFxuICBUeXBvZ3JhcGh5LFxuICBCb3gsXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xuXG5pbnRlcmZhY2UgQWRkUHJvamVjdE1vZGFsUHJvcHMge1xuICBvcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICBvbkFkZDogKHRpdGxlOiBzdHJpbmcsIGltYWdlOiBhbnkpID0+IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBjb25zdCBBZGRQcm9qZWN0TW9kYWwgPSAoeyBvcGVuLCBvbkNsb3NlLCBvbkFkZCB9KSA9PiB7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcyB9ID0gdXNlRHJvcHpvbmUoe1xuICAgIGFjY2VwdDogXCJpbWFnZS8qXCIsXG4gICAgbWF4RmlsZXM6IDEsXG4gICAgb25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coYWNjZXB0ZWRGaWxlcyk7XG4gICAgICBzZXRJbWFnZShhY2NlcHRlZEZpbGVzKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICBhd2FpdCBvbkFkZCh0aXRsZSwgZGVzY3JpcHRpb24pO1xuICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgc2V0VGl0bGUoXCJcIik7XG4gICAgc2V0RGVzY3JpcHRpb24oXCJcIik7XG4gICAgb25DbG9zZSgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERpYWxvZyBvcGVuPXtvcGVufSBvbkNsb3NlPXtvbkNsb3NlfSBtYXhXaWR0aD1cInNtXCIgZnVsbFdpZHRoPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxEaWFsb2dUaXRsZT5BZGQgQ2hlY2tpbjwvRGlhbG9nVGl0bGU+XG4gICAgICAgIDxEaWFsb2dDb250ZW50PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxuICAgICAgICAgICAgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8Qm94IG10PXsyfT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj5VcGxvYWQgSW1hZ2U8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgey4uLmdldFJvb3RQcm9wcygpfVxuICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBkYXNoZWQgIzdCNUFGRlwiLFxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDQsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzdCNUFGRlwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlxuICAgICAgICAgICAgICBDbGljayBvciBkcmFnIGZpbGUgdG8gdGhpcyBhcmVhIHRvIHVwbG9hZFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsb3NlfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ30+XG4gICAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gXCJBZGRpbmcuLi5cIiA6IFwiQWRkXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvZm9ybT5cbiAgICA8L0RpYWxvZz5cbiAgKTtcbn07XG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBCdXR0b24sIFRleHRGaWVsZCwgQ29udGFpbmVyLCBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XG4vLyBpbXBvcnQgeyBzdG9yYWdlLCBkYiB9IGZyb20gJy4uL2xpYi9maXJlYmFzZSc7IC8vIEltcG9ydCBjb25maWd1cmF0aW9uXG4vLyBpbXBvcnQgeyByZWYsIHVwbG9hZEJ5dGVzUmVzdW1hYmxlLCBnZXREb3dubG9hZFVSTCB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xuLy8gaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuLy8gZXhwb3J0IGNvbnN0IEFkZFByb2plY3RNb2RhbD0oKT0+e1xuLy8gICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbi8vICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4vLyAgIGNvbnN0IFt1cGxvYWRpbmcsIHNldFVwbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4vLyAgIGNvbnN0IFtyZWNvcmRzLCBzZXRSZWNvcmRzXSA9IHVzZVN0YXRlKFtdKTtcblxuLy8gICAvLyBIYW5kbGUgZmlsZSBpbnB1dCBjaGFuZ2Vcbi8vICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IChlKSA9PiB7XG4vLyAgICAgc2V0RmlsZShlLnRhcmdldC5maWxlc1swXSk7XG4vLyAgIH07XG5cbi8vICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxuLy8gICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICBpZiAoIXRpdGxlIHx8ICFmaWxlKSByZXR1cm47XG5cbi8vICAgICBzZXRVcGxvYWRpbmcodHJ1ZSk7XG5cbi8vICAgICB0cnkge1xuLy8gICAgICAgLy8gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBzdG9yYWdlIGxvY2F0aW9uXG4vLyAgICAgICBjb25zdCBzdG9yYWdlUmVmID0gcmVmKHN0b3JhZ2UsIGBpbWFnZXMvJHtmaWxlLm5hbWV9YCk7XG4vLyAgICAgICBjb25zdCB1cGxvYWRUYXNrID0gdXBsb2FkQnl0ZXNSZXN1bWFibGUoc3RvcmFnZVJlZiwgZmlsZSk7XG5cbi8vICAgICAgIC8vIE1vbml0b3IgdXBsb2FkIHByb2dyZXNzXG4vLyAgICAgICB1cGxvYWRUYXNrLm9uKFxuLy8gICAgICAgICAnc3RhdGVfY2hhbmdlZCcsXG4vLyAgICAgICAgIChzbmFwc2hvdCkgPT4ge1xuLy8gICAgICAgICAgIC8vIE9wdGlvbmFsbHkgaGFuZGxlIHByb2dyZXNzIHVwZGF0ZXNcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgKGVycm9yKSA9PiB7XG4vLyAgICAgICAgICAgY29uc29sZS5lcnJvcignVXBsb2FkIGVycm9yOicsIGVycm9yKTtcbi8vICAgICAgICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBhc3luYyAoKSA9PiB7XG4vLyAgICAgICAgICAgLy8gR2V0IHRoZSBkb3dubG9hZCBVUkxcbi8vICAgICAgICAgICBjb25zdCBkb3dubG9hZFVSTCA9IGF3YWl0IGdldERvd25sb2FkVVJMKHVwbG9hZFRhc2suc25hcHNob3QucmVmKTtcbi8vICAgICAgICAgICBjb25zb2xlLmxvZygnRmlsZSBhdmFpbGFibGUgYXQnLCBkb3dubG9hZFVSTCk7XG5cbi8vICAgICAgICAgICAvLyBTYXZlIHRvIEZpcmVzdG9yZVxuLy8gICAgICAgICAgIGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCAncHJvamVjdHMnKSwge1xuLy8gICAgICAgICAgICAgdGl0bGUsXG4vLyAgICAgICAgICAgICBpbWFnZVVybDogZG93bmxvYWRVUkwsXG4vLyAgICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4vLyAgICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgICBzZXRVcGxvYWRpbmcoZmFsc2UpO1xuLy8gICAgICAgICAgIHNldFRpdGxlKCcnKTtcbi8vICAgICAgICAgICBzZXRGaWxlKG51bGwpO1xuLy8gICAgICAgICAgIGFsZXJ0KCdVcGxvYWQgc3VjY2Vzc2Z1bCEnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgKTtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIGZpbGUgdXBsb2FkOicsIGVycm9yKTtcbi8vICAgICAgIHNldFVwbG9hZGluZyhmYWxzZSk7XG4vLyAgICAgfVxuLy8gICB9O1xuXG4vLyAgIC8vIEZldGNoIHJlY29yZHMgZnJvbSBGaXJlc3RvcmVcbi8vICAgY29uc3QgZmV0Y2hSZWNvcmRzID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgIHRyeSB7XG4vLyAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCAndXBsb2FkcycpKTtcbi8vICAgICAgIGNvbnN0IHJlY29yZHNBcnJheSA9IHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gKHtcbi8vICAgICAgICAgaWQ6IGRvYy5pZCxcbi8vICAgICAgICAgLi4uZG9jLmRhdGEoKSxcbi8vICAgICAgIH0pKTtcbi8vICAgICAgIHNldFJlY29yZHMocmVjb3Jkc0FycmF5KTtcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcmVjb3JkczonLCBlcnJvcik7XG4vLyAgICAgfVxuLy8gICB9O1xuXG4vLyAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgZmV0Y2hSZWNvcmRzKCk7XG4vLyAgIH0sIFtdKTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxDb250YWluZXI+XG4vLyAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbi8vICAgICAgICAgPFRleHRGaWVsZFxuLy8gICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuLy8gICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4vLyAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuLy8gICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuLy8gICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzE2cHgnIH19XG4vLyAgICAgICAgIC8+XG4vLyAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbi8vICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cbi8vICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxNnB4JyB9fVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgZGlzYWJsZWQ9e3VwbG9hZGluZ30+XG4vLyAgICAgICAgICAge3VwbG9hZGluZyA/IDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezI0fSAvPiA6ICdVcGxvYWQnfVxuLy8gICAgICAgICA8L0J1dHRvbj5cbi8vICAgICAgIDwvZm9ybT5cbi8vICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMjRweCcgfX0+XG4vLyAgICAgICAgIDxoMj5VcGxvYWRlZCBSZWNvcmRzPC9oMj5cbi8vICAgICAgICAge3JlY29yZHMubWFwKChyZWNvcmQpID0+IChcbi8vICAgICAgICAgICA8ZGl2IGtleT17cmVjb3JkLmlkfT5cbi8vICAgICAgICAgICAgIDxoMz57cmVjb3JkLnRpdGxlfTwvaDM+XG4vLyAgICAgICAgICAgICA8aW1nIHNyYz17cmVjb3JkLmltYWdlVXJsfSBhbHQ9e3JlY29yZC50aXRsZX0gc3R5bGU9e3sgbWF4V2lkdGg6ICcyMDBweCcsIG1hcmdpbkJvdHRvbTogJzhweCcgfX0gLz5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgKSl9XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L0NvbnRhaW5lcj5cbi8vICAgKTtcbi8vIH07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJEaWFsb2ciLCJEaWFsb2dUaXRsZSIsIkRpYWxvZ0NvbnRlbnQiLCJEaWFsb2dBY3Rpb25zIiwiVGV4dEZpZWxkIiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkJveCIsInVzZURyb3B6b25lIiwiQWRkUHJvamVjdE1vZGFsIiwib3BlbiIsIm9uQ2xvc2UiLCJvbkFkZCIsInRpdGxlIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJhY2NlcHQiLCJtYXhGaWxlcyIsIm9uRHJvcCIsImFjY2VwdGVkRmlsZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibWF4V2lkdGgiLCJmdWxsV2lkdGgiLCJmb3JtIiwib25TdWJtaXQiLCJhdXRvRm9jdXMiLCJtYXJnaW4iLCJsYWJlbCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsIm11bHRpbGluZSIsInJvd3MiLCJtdCIsInZhcmlhbnQiLCJzeCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImlucHV0Iiwib25DbGljayIsInR5cGUiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/AddProjectModal.tsx\n"));

/***/ })

});