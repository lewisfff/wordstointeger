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

var data = __webpack_require__(7);

var WordsToNumberApp = function () {
    function WordsToNumberApp() {
        _classCallCheck(this, WordsToNumberApp);

        this.numbers = data.numbers;
        this.multiples = data.multiples;
        this.inputZone = document.getElementById('input-zone');
        this.outputZone = document.getElementById('output-zone');
        this.actionButton = document.getElementById('action-btn');
        this.eventListeners();
    }

    _createClass(WordsToNumberApp, [{
        key: 'eventListeners',
        value: function eventListeners() {
            var _this = this;

            this.actionButton.addEventListener('click', function () {
                _this.convert(_this.inputZone.value);
            });
        }
    }, {
        key: 'convert',
        value: function convert(wordString) {
            var tokens = this.wordSplit(wordString);

            if (this.validateInput(tokens)) return this.calcNumber(tokens);else return this.showInputError(wordString);
        }
    }, {
        key: 'validateInput',
        value: function validateInput(tokens) {
            var valid = true;

            for (var i = 0; i < tokens.length; i++) {
                if (this.numbers[tokens[i]] != null) {} else if (this.multiples[tokens[i]] != null) {} else if (tokens[i] === 'and') {
                    tokens.splice(i, 1);
                } else if (tokens[i] === 'zero' || tokens[i] === 'minus') {
                    // these words only make sense as the first word
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
        key: 'showInputError',
        value: function showInputError(wordString) {
            alert('Invalid input string "' + wordString + '"');
        }
    }, {
        key: 'wordSplit',
        value: function wordSplit(wordString) {
            return wordString.toLowerCase().split(' ');
        }
    }, {
        key: 'calcNumber',
        value: function calcNumber(tokens) {
            var _this2 = this;

            var invalid = false;
            var tempSum = 0;
            var result = 0;
            var lastToken = void 0;
            var isNegative = void 0;

            // todo: split the tokens into groups

            tokens.forEach(function (token) {
                if (_this2.numbers[token] != null) {
                    result += _this2.numbers[token];
                } else if (_this2.multiples[token] != null) {
                    if (_this2.multiples[lastToken] != null) {
                        // if input is entered as 'thousand thousand' or
                        // 'million hundred' for example, make it invalid
                        if (_this2.multiples[lastToken] >= _this2.multiples[token]) invalid = true;
                    }
                    result *= _this2.multiples[token];
                } else if (token === 'minus') {
                    isNegative = true;
                } else {
                    invalid = true;
                }

                lastToken = token;
            });

            if (isNegative) result = -Math.abs(result);

            if (!invalid) this.showResult(result);else this.showInputError('Invalid number syntax');
        }
    }, {
        key: 'showResult',
        value: function showResult(result) {
            this.outputZone.innerText = result;
        }
    }]);

    return WordsToNumberApp;
}();

window.addEventListener('load', function () {
    return window.wtna = new WordsToNumberApp();
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



/***/ })
/******/ ]);