// const millisToMinutesAndSeconds = require('./api.js').millisToMinutesAndSeconds
// const addMinutes = require('./api.js').addMinutes
var timer = document.getElementById('timer');
var pomoBtn = document.getElementById('pomoBtn');
var soundName = 'alarm'
var sound = new Audio(__dirname + '/assets/sounds/' + soundName + '.mp3');
var interval;

function addMinutes(date, minutes) {
	return new Date(date.getTime() + minutes * 60000);
}

function millisToMinutesAndSeconds(millis) {
	var minutes = Math.floor(millis / 60000);
	var seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10
		? '0'
		: '') + seconds;
}

function createTimer(minutes) {
	var startTime = new Date();
	var endTime = addMinutes(startTime, minutes);
	interval = setInterval(() => {
		if (endTime - new Date() < 0) {
			clearInterval(interval);
			interval = null;
			timer.innerHTML = 'DONE'
			sound.play();
			return;
		}
		timer.innerHTML = millisToMinutesAndSeconds(endTime - new Date());

	}, 1000)
}

pomoBtn.addEventListener('click', (e) => {
	if (interval) {
		clearInterval(interval);
		interval = null;
	}
	createTimer(25);
});
