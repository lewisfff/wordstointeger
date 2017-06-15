/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var converter = __webpack_require__(8);

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.converter = new converter.WordsToNumberConverter();
        this.inputZone = document.getElementById('input-zone');
        this.outputZone = document.getElementById('output-zone');
        this.actionButton = document.getElementById('action-btn');
        this.eventListeners();
    }

    _createClass(App, [{
        key: 'eventListeners',
        value: function eventListeners() {
            var _this = this;

            this.actionButton.addEventListener('click', function () {
                var result = _this.converter.convert(_this.inputZone.value);

                if (result === undefined) _this.showInputError();else _this.showResult(result);
            });
        }
    }, {
        key: 'showResult',
        value: function showResult(result) {
            this.outputZone.innerText = result;
        }
    }, {
        key: 'showInputError',
        value: function showInputError() {
            alert('Invalid input detected');
        }
    }]);

    return App;
}();

window.addEventListener('load', function () {
    return window.wtnc = new App();
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiples", function() { return multiples; });

var numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
};

var multiples = {
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000,
    'billion': 1000000000,
    'trillion': 1000000000000
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsToNumberConverter", function() { return WordsToNumberConverter; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var data = __webpack_require__(7);

var WordsToNumberConverter = function () {
    function WordsToNumberConverter() {
        _classCallCheck(this, WordsToNumberConverter);

        this.numbers = data.numbers;
        this.multiples = data.multiples;
    }

    _createClass(WordsToNumberConverter, [{
        key: 'convert',
        value: function convert(wordString) {
            var tokens = this.wordSplit(wordString);
            this.isNegative = false;
            this.invalid = false;

            if (this.validateInput(tokens)) return this.calcNumber(tokens);else return undefined;
        }
    }, {
        key: 'validateInput',
        value: function validateInput(tokens) {
            var valid = true;

            for (var i = 0; i < tokens.length; i++) {
                if (this.numbers[tokens[i]] != null) {} else if (this.multiples[tokens[i]] != null) {} else if (tokens[i] === 'and') {
                    tokens.splice(i, 1);
                } else if (tokens[i] === 'zero' || tokens[i] === 'minus') {
                    if (i > 0) {
                        valid = false;
                    }
                } else {
                    valid = false;
                }
            }

            return valid;
        }
    }, {
        key: 'wordSplit',
        value: function wordSplit(wordString) {
            return wordString.toLowerCase().split(' ');
        }
    }, {
        key: 'calcNumber',
        value: function calcNumber(tokens) {
            var results = this.sumTokens(tokens);
            var result = this.sumResults(results);

            if (this.isNegative === true) result = -Math.abs(result);

            if (!this.invalid) return result;else return undefined;
        }
    }, {
        key: 'sumTokens',
        value: function sumTokens(tokens) {
            var _this = this;

            var sum = 0;
            var results = [];
            var result = 0;
            var lastToken = void 0;

            tokens.forEach(function (token) {
                if (_this.numbers[token] != null) {
                    if (_this.numbers[lastToken] < 20 && _this.numbers[token]) _this.invalid = true;
                    if (sum) results.push(sum);
                    sum = _this.numbers[token];
                } else if (_this.multiples[token] != null) {
                    if (_this.multiples[lastToken] != null) {
                        if (_this.multiples[lastToken] >= _this.multiples[token]) _this.invalid = true;
                    }
                    sum *= _this.multiples[token];
                } else if (token === 'minus') {
                    _this.isNegative = true;
                } else {
                    _this.invalid = true;
                }
                lastToken = token;
            });
            results.push(sum);
            console.log(results);
            return results;
        }
    }, {
        key: 'sumResults',
        value: function sumResults(results) {
            var sum = 0;
            var mag = void 0;

            for (var i = results.length - 1; i >= 0; i--) {
                var cur = results[i];
                if (i === results.length - 1) {
                    sum += cur;
                } else {
                    if (cur > sum) {
                        sum += cur;
                    } else {
                        mag = this.magnitude(sum) - (this.magnitude(sum) - this.magnitude(cur));

                        if (mag === 2) mag++;

                        sum += cur * Math.pow(10, mag);
                    }
                }
            }

            return sum;
        }
    }, {
        key: 'magnitude',
        value: function magnitude(number) {
            return number.toString().length;
        }
    }]);

    return WordsToNumberConverter;
}();



/***/ })
/******/ ]);