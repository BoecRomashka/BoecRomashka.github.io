/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const floorAccordionBtn = document.getElementById(\"floor_accordeon-btn\");\r\nfloorAccordionBtn.addEventListener(\"click\", function () {\r\n  const content = document.getElementById(\"floor_accordeon-content\");\r\n  const arrow = document.getElementById(\"floor_arrow\");\r\n  if (content.style.maxHeight) {\r\n    //this is if the accordion is open\r\n    content.style.maxHeight = null;\r\n    content.style.padding = null;\r\n    content.style.borderTop = null;\r\n    arrow.style.transform = null;\r\n    arrow.style.padding = \"0 0 20rem\";\r\n  } else {\r\n    //if the accordion is currently closed\r\n    content.style.maxHeight = content.scrollHeight + \"rem\";\r\n    content.style.padding = \"50rem 0 155rem\";\r\n    content.style.borderTop = \"medium solid #efefef\";\r\n    arrow.style.transform = \"rotate(180deg)\";\r\n    arrow.style.padding = \"20rem 0 0\";\r\n  }\r\n});\r\n\r\nconst woodAccordionBtn = document.getElementById(\"wood_accordeon-btn\");\r\nwoodAccordionBtn.addEventListener(\"click\", function () {\r\n  const content = document.getElementById(\"wood_accordeon-content\");\r\n  const arrow = document.getElementById(\"wood_arrow\");\r\n  if (content.style.maxHeight) {\r\n    //this is if the accordion is open\r\n    content.style.maxHeight = null;\r\n    content.style.borderTop = null;\r\n    arrow.style.transform = null;\r\n    arrow.style.padding = \"0 0 20rem\";\r\n  } else {\r\n    //if the accordion is currently closed\r\n    content.style.maxHeight = 960 + \"rem\";\r\n    content.style.borderTop = \"medium solid #efefef\";\r\n    arrow.style.transform = \"rotate(180deg)\";\r\n    arrow.style.padding = \"20rem 0 0\";\r\n  }\r\n});\r\n\r\nconst menuOpen = document.querySelector(\".menu\");\r\nconst menu = document.querySelector(\".menu_out\");\r\nconst body = document.querySelector(\"body\");\r\nconst lockPadding = document.querySelectorAll(\".lock-padding\");\r\nconst closeBtn = document.querySelector(\".close-menu\");\r\n\r\nlet unlock = true;\r\n\r\nconst timeout = 800;\r\n\r\nmenuOpen.addEventListener(\"click\", function (e) {\r\n  // bodyLock();\r\n\r\n  menu.classList.add(\"open\");\r\n  body.classList.add(\"lock\");\r\n  menu.addEventListener(\"click\", function (e) {\r\n    if (!e.target.closest(\".menu_in\")) {\r\n      menu.classList.remove(\"open\");\r\n      body.classList.remove(\"lock\");\r\n      // bodyUnlock();\r\n    }\r\n  });\r\n});\r\n\r\ncloseBtn.addEventListener(\"click\", function (e) {\r\n  menu.classList.remove(\"open\");\r\n  body.classList.remove(\"lock\");\r\n  // bodyUnlock();\r\n});\r\n\r\n// function bodyLock() {\r\n//   const lockPaddingValue = window.innerWidth - document.querySelector(\".wrapper\").offsetWidth + \"px\";\r\n\r\n//   for (let index = 0; index < lockPadding.length; index++) {\r\n//     const element = lockPadding[index];\r\n//     element.style.paddingRight = lockPaddingValue;\r\n//   }\r\n//   body.style.paddingRight = lockPaddingValue;\r\n//   body.classList.add(\"lock\");\r\n// }\r\n\r\n// function bodyUnlock() {\r\n//   setTimeout(function () {\r\n//     for (let index = 0; index < lockPadding.length; index++) {\r\n//       const element = lockPadding[index];\r\n//       element.style.paddingRight = \"0px\";\r\n//     }\r\n//     body.style.paddingRight = \"0px\";\r\n//     body.classList.remove(\"lock\");\r\n//   }, timeout);\r\n\r\n//   unlock = false;\r\n//   setTimeout(function () {\r\n//     unlock = true;\r\n//   }, timeout);\r\n// }\r\n\r\ndocument.addEventListener(\"keydown\", function (e) {\r\n  if (e.key === \"Escape\") {\r\n    menu.classList.remove(\"open\");\r\n    body.classList.remove(\"lock\");\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });