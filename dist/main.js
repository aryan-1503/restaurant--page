/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactUs() {\r\n    const contactContent = document.createElement('div');\r\n    contactContent.id = 'contact';\r\n\r\n    const headingDiv = document.createElement('div');\r\n    headingDiv.classList.add('heading');\r\n    headingDiv.innerHTML = \"Contact Us\";\r\n    contactContent.append(headingDiv);\r\n\r\n    const contactInfo = document.createElement('div');\r\n    contactInfo.classList.add('contact-info');\r\n\r\n    const Phone = document.createElement('div');\r\n    Phone.innerHTML = \"📞 123-456-789-0\";\r\n    contactInfo.append(Phone);\r\n\r\n    const Location = document.createElement('div');\r\n    Location.innerHTML = \"🏠 Baratie,East-Blue,OnePiece World\";\r\n    contactInfo.append(Location);\r\n\r\n    contactContent.append(contactInfo);\r\n\r\n    const Email = document.createElement('div');\r\n    Email.innerHTML = \"📧 baratie@onepiece.com\";\r\n    contactInfo.append(Email);\r\n\r\n    const mapImage = document.createElement('div');\r\n    mapImage.classList.add('map-image');\r\n\r\n    const image = document.createElement('img');\r\n    image.src = \"./../dist/images/map.jpeg\";\r\n    image.alt = \"map\";\r\n\r\n    mapImage.append(image);\r\n\r\n    contactContent.append(mapImage);\r\n\r\n    return contactContent;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactUs);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\r\n    const homeContent = document.createElement('div');\r\n    // homeContent.classList.add('active');\r\n    homeContent.id = 'home';\r\n\r\n    const headingDiv = document.createElement('div');\r\n    headingDiv.className = 'heading';\r\n    headingDiv.innerHTML = 'Welcome To Baratie';\r\n\r\n    const imagesDiv = document.createElement('div');\r\n    imagesDiv.className = 'imgs';\r\n    const sanjiImage = document.createElement('img');\r\n    sanjiImage.src = './images/sanji1.jpg';\r\n    sanjiImage.alt = 'sanji';\r\n\r\n\r\n    imagesDiv.appendChild(sanjiImage);\r\n\r\n    const contentsDiv = document.createElement('div');\r\n    contentsDiv.className = 'contents';\r\n    contentsDiv.innerHTML = `\r\n    At Baratie, we bring the flavors of the Grand Line to your table. Immerse yourself in a culinary journey inspired by the high seas and curated by our world-renowned chef, the \"Black-Leg,\" Vinsmoke Sanji. Known for his passion for cooking and chivalry, Sanji has crafted a menu that combines exquisite taste with the thrill of adventure.<br><br>\r\n    Join us at Baratie for an unparalleled dining experience. Embark on a culinary adventure where the sea meets the senses, and every dish tells a tale of the great pirate era.\r\n    <br><br>\r\n    Reserve your table now and set sail for a gastronomic journey like no other!`;\r\n\r\n    homeContent.append(headingDiv, imagesDiv, contentsDiv);\r\n    return homeContent;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n    const menuContent = document.createElement('div');\r\n    menuContent.id = 'menu';\r\n\r\n    const headingDiv = document.createElement('div');\r\n    headingDiv.classList.add('heading');\r\n    headingDiv.innerHTML = \"Menu\";\r\n    menuContent.append(headingDiv);\r\n\r\n    const gridContainer = document.createElement('div');\r\n    gridContainer.classList.add('grid-container');\r\n\r\n    const food1 = createFoodCard('./../dist/images/Fried_Rice.jpeg','fried rice',\"Fried Rice\",\"5\");\r\n    const food2 = createFoodCard('./../dist/images/lasagna.jpeg','Lasagna',\"Lasagna\",\"10\");\r\n    const food3 = createFoodCard('./../dist/images/oshiruko.jpeg','Oshiruko',\"Oshiruko\",\"8\");\r\n    const food4 = createFoodCard('./../dist/images/Oden.jpeg','Oden',\"Oden\",\"12\");\r\n    const food5 = createFoodCard('./../dist/images/Ramen.jpeg','Ramen',\"Ramen\",\"10\");\r\n    const food6 = createFoodCard('./../dist/images/cola.jpg','Franky Cola',\"Franky Cola\",\"1\");\r\n\r\n    gridContainer.append(food1);\r\n    gridContainer.append(food2);\r\n    gridContainer.append(food3);\r\n    gridContainer.append(food4);\r\n    gridContainer.append(food5);\r\n    gridContainer.append(food6);\r\n\r\n    menuContent.append(gridContainer);\r\n\r\n    return menuContent\r\n}\r\n\r\nfunction createFoodCard(imagePath,imageAlt,Name,Price){\r\n    const foodCard = document.createElement('div');\r\n    foodCard.classList.add('food-card');\r\n    const foodImg = document.createElement('div');\r\n    foodImg.classList.add('food-img');\r\n    const Image = document.createElement('img');\r\n    Image.src = imagePath;\r\n    Image.alt = imageAlt;\r\n    foodImg.append(Image);\r\n    foodCard.append(foodImg)\r\n\r\n    const foodInfo = document.createElement('div');\r\n    foodInfo.classList.add('food-info');\r\n    const foodName = document.createElement('div');\r\n    foodName.innerHTML = Name;\r\n    foodInfo.append(foodName);\r\n    const foodPrice = document.createElement('div');\r\n    foodPrice.innerHTML = \"Price : $\"+Price;\r\n    foodInfo.append(foodPrice)\r\n    foodCard.append(foodInfo)\r\n\r\n    return foodCard;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\nconst displayContainer = document.createElement('div');\r\nfunction createButtons() {\r\n    const buttonContainer = document.createElement('div');\r\n    buttonContainer.classList.add('buttons-container');\r\n\r\n    const homeButton = createButton('Home', loadHome);\r\n    const menuButton = createButton('Menu', loadMenu);\r\n    const contactButton = createButton('Contact Us', loadContactUs);\r\n\r\n    buttonContainer.append(homeButton, menuButton, contactButton);\r\n    return buttonContainer;\r\n}\r\nfunction createButton(text, onClickFunction) {\r\n    const button = document.createElement('button');\r\n    button.innerText = text;\r\n    button.onclick = onClickFunction;\r\n    return button;\r\n}\r\n\r\nfunction loadHome(){\r\n    displayContainer.innerHTML='';\r\n    displayContainer.append((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    content.append(displayContainer);\r\n}\r\n\r\nfunction loadMenu(){\r\n    displayContainer.innerHTML='';\r\n    displayContainer.append((0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    content.append(displayContainer)\r\n}\r\nfunction loadContactUs(){\r\n    displayContainer.innerHTML='';\r\n    displayContainer.append((0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n}\r\nfunction createDisplay() {\r\n\r\n    displayContainer.classList.add('display');\r\n    displayContainer.append((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    return displayContainer;\r\n}\r\nfunction initializeWebsite(){\r\n    content.append(createButtons());\r\n    content.append(createDisplay());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/website.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;