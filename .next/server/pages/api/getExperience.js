"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getExperience";
exports.ids = ["pages/api/getExperience"];
exports.modules = {

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ "(api)/./pages/api/getExperience.ts":
/*!************************************!*\
  !*** ./pages/api/getExperience.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/sanity */ \"(api)/./sanity.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst query = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n*[_type == \"experience\"] {\r\n  ...,\r\n  technologies[]->\r\n}\r\n`;\nasync function handler(req, res) {\n    const experiences = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(query);\n    res.status(200).json({\n        experiences\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0RXhwZXJpZW5jZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDbUM7QUFDSztBQUd4QyxNQUFNRSxRQUFRRiw2Q0FBSSxDQUFDOzs7OztBQUtuQixDQUFDO0FBTWMsZUFBZUcsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUEwQixFQUMxQjtJQUNBLE1BQU1DLGNBQTRCLE1BQU1MLHVEQUFrQixDQUFDQztJQUUzREcsSUFBSUcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFSDtJQUFZO0FBQ3JDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXBvcnRmb2xpby8uL3BhZ2VzL2FwaS9nZXRFeHBlcmllbmNlLnRzPzJmOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgZ3JvcSB9IGZyb20gXCJuZXh0LXNhbml0eVwiO1xyXG5pbXBvcnQgeyBzYW5pdHlDbGllbnQgfSBmcm9tIFwiQC9zYW5pdHlcIjtcclxuaW1wb3J0IHsgRXhwZXJpZW5jZSB9IGZyb20gXCJAL3R5cGluZ3NcIjtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWBcclxuKltfdHlwZSA9PSBcImV4cGVyaWVuY2VcIl0ge1xyXG4gIC4uLixcclxuICB0ZWNobm9sb2dpZXNbXS0+XHJcbn1cclxuYDtcclxuXHJcbnR5cGUgRGF0YSA9IHtcclxuICBleHBlcmllbmNlczogRXhwZXJpZW5jZVtdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+LFxyXG4pIHtcclxuICBjb25zdCBleHBlcmllbmNlczogRXhwZXJpZW5jZVtdID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5KTtcclxuXHJcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBleHBlcmllbmNlcyB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiZ3JvcSIsInNhbml0eUNsaWVudCIsInF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImV4cGVyaWVuY2VzIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getExperience.ts\n");

/***/ }),

/***/ "(api)/./sanity.ts":
/*!*******************!*\
  !*** ./sanity.ts ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient),\n/* harmony export */   \"urlFor\": () => (/* binding */ urlFor)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst config = {\n    dataset: \"production\" || 0,\n    projectId: \"bcyv0xlr\",\n    apiVersion: \"2021-10-21\",\n    useCdn: \"development\" === \"production\"\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\nconst urlFor = (source)=>_sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(config).image(source);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ1c7QUFFL0MsTUFBTUUsU0FBUztJQUNsQkMsU0FBU0MsWUFBc0MsSUFBSSxDQUFZO0lBQy9ERyxXQUFXSCxVQUF5QztJQUNwREssWUFBWTtJQUNaQyxRQUFRTixrQkFBeUI7QUFDckMsRUFBRTtBQUVLLE1BQU1PLGVBQWVYLHlEQUFZQSxDQUFDRSxRQUFRO0FBRTFDLE1BQU1VLFNBQVMsQ0FBQ0MsU0FDdEJaLHdEQUFxQkEsQ0FBQ0MsUUFBUVksS0FBSyxDQUFDRCxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlwb3J0Zm9saW8vLi9zYW5pdHkudHM/MTAzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICduZXh0LXNhbml0eSc7XHJcbmltcG9ydCBjcmVhdGVJbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGRhdGFzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9EQVRBU0VUIHx8IFwicHJvZHVjdGlvblwiLFxyXG4gICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCEsXHJcbiAgICBhcGlWZXJzaW9uOiBcIjIwMjEtMTAtMjFcIixcclxuICAgIHVzZUNkbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVybEZvciA9IChzb3VyY2U6IGFueSkgPT4gXHJcbiBjcmVhdGVJbWFnZVVybEJ1aWxkZXIoY29uZmlnKS5pbWFnZShzb3VyY2UpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2xpZW50IiwiY3JlYXRlSW1hZ2VVcmxCdWlsZGVyIiwiY29uZmlnIiwiZGF0YXNldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lEIiwiYXBpVmVyc2lvbiIsInVzZUNkbiIsInNhbml0eUNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./sanity.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getExperience.ts"));
module.exports = __webpack_exports__;

})();