import {convertMinuteToSecond, getMinute, getSecond, formatTime, unformatTime} from './api.js'
const timer = document.getElementById('timer');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const soundName = 'alarm'
const sound = new Audio(`${__dirname}/assets/sounds/${soundName}.mp3`);
let WORKING = 'WORKING';
let PAUSED = 'PAUSED';
let IDLE = 'IDLE';

let interval;
let state = IDLE;

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
		leftBtn.onclick = timerStart.bind(leftBtn)
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
	leftBtn.innerHTML = "Pause"
	rightBtn.innerHTML = "Reset"
	createTimer(this.value);
	applyState(state);
}

function timerPause(e) {
	state = PAUSED;
	pause();
	leftBtn.innerHTML = "Resume"
	applyState(state);
}

function timerResume(e) {
	state = WORKING;
	resume();
	leftBtn.innerHTML = "Pause"
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
	leftBtn.innerHTML = "Work"
	rightBtn.innerHTML = "Break"
	setUITimer('Tomado');
}

function setUITimer(formattedTime) {
	timer.innerHTML = formattedTime;
}
function getRemainingTime() {
	return timer.innerHTML;
}

function pause() {
	console.log("HERE");
	let timeToDisplay = getRemainingTime();
	console.log('timeToDisplay ' + timeToDisplay);
	clearInterval(interval)
	timer.innerHTML = timeToDisplay;
}

function resume() {
	console.log('inside resume');
	createTimer(unformatTime(getRemainingTime()));
}

function createTimer(minutes) {
	console.log('inside createTimer with value ' + minutes);
	resetInterval();
	let startTime = convertMinuteToSecond(minutes);
	let endTime = 0;
	let difference = startTime - endTime;
	setUITimer(formatTime(difference));
	interval = setInterval(() => {
		startTime--;
		difference = startTime - endTime
		setUITimer(formatTime(difference));
		if (difference === 0) {
			clearInterval(interval);
			sound.play();
			return;
		}
	}, 1000)
}

applyState(state);
