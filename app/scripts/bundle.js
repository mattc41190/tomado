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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _api = __webpack_require__(1);

var timer = document.getElementById('timer');
var leftBtn = document.getElementById('left-btn');
var rightBtn = document.getElementById('right-btn');
var soundName = 'alarm';
var sound = new Audio(__dirname + '/assets/sounds/' + soundName + '.mp3');
var WORKING = 'WORKING';
var PAUSED = 'PAUSED';
var IDLE = 'IDLE';

var interval = void 0;
var state = IDLE;

function applyState(state) {
	setLeftButtonState(state);
	setRightButtonState(state);
}

function setLeftButtonState(state) {
	if (state === WORKING) {
		leftBtn.onclick = timerPause;
	} else if (state === PAUSED) {
		leftBtn.onclick = timerResume;
	} else {
		leftBtn.onclick = timerStart.bind(leftBtn);
	}
}

function setRightButtonState(state) {
	if (state === WORKING) {
		rightBtn.onclick = timerReset;
	} else if (state === PAUSED) {
		rightBtn.onclick = timerReset;
	} else {
		rightBtn.onclick = timerStart.bind(rightBtn);
	}
}

function timerStart() {
	state = WORKING;
	leftBtn.innerHTML = 'Pause';
	rightBtn.innerHTML = 'Reset';
	createTimer(this.value);
	applyState(state);
}

function timerPause(e) {
	state = PAUSED;
	pause();
	leftBtn.innerHTML = 'Resume';
	applyState(state);
}

function timerResume(e) {
	state = WORKING;
	resume();
	leftBtn.innerHTML = 'Pause';
	applyState(state);
}

function timerReset(e) {
	state = IDLE;
	reset();
	applyState(state);
}

function setText(event, text) {
	event.target.innerHTML = text;
}

function resetInterval() {
	if (interval) {
		clearInterval(interval);
		interval = null;
	}
}

function reset() {
	resetInterval();
	leftBtn.innerHTML = 'Work';
	rightBtn.innerHTML = 'Break';
	setUITimer('Tomado');
}

function setUITimer(formattedTime) {
	timer.innerHTML = formattedTime;
}
function getRemainingTime() {
	return timer.innerHTML;
}

function pause() {
	var timeToDisplay = getRemainingTime();
	clearInterval(interval);
	timer.innerHTML = timeToDisplay;
}

function resume() {
	createTimer((0, _api.unformatTime)(getRemainingTime()));
}

function createTimer(minutes) {
	resetInterval();
	var startTime = (0, _api.convertMinutesToSeconds)(minutes);
	var endTime = 0;
	var difference = startTime - endTime;
	setUITimer((0, _api.formatTime)(difference));
	interval = setInterval(function () {
		startTime--;
		difference = startTime - endTime;
		setUITimer((0, _api.formatTime)(difference));
		if (difference === 0) {
			clearInterval(interval);
			sound.play();
			return;
		}
	}, 1000);
}

applyState(state);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function convertMinutesToSeconds(minutes) {
	return minutes * 60;
}

function _getMinutes(seconds) {
	return Math.floor(seconds / 60);
}

// Get remaining seconds
function _getSeconds(seconds) {
	return Math.floor(seconds % 60);
}

function minutesAndSecondsToDecimal(minutes, seconds) {
	return parseFloat(minutes) + parseFloat(seconds / 60);
}

function formatTime(seconds) {
	var minute = _getMinutes(seconds);
	// if there are less than 10 seconds left prepend a "0" to the value
	var second = _getSeconds(seconds) >= 10 ? _getSeconds(seconds) : '0' + _getSeconds(seconds);
	return minute + ':' + second;
}

function unformatTime(formattedTime) {
	var splitTime = formattedTime.split(':');
	return minutesAndSecondsToDecimal(splitTime[0], splitTime[1]);
}

module.exports = {
	convertMinutesToSeconds: convertMinutesToSeconds,
	_getMinutes: _getMinutes,
	_getSeconds: _getSeconds,
	formatTime: formatTime,
	unformatTime: unformatTime
};

/***/ })
/******/ ]);